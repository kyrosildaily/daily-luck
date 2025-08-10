// SENİN BİLGİLERİNLE DOLDURULMUŞ FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyCNpnXAc2ntwW61f2NnhVGrN_4wLFjwCZk",
    authDomain: "kyrosildaily.firebaseapp.com",
    projectId: "kyrosildaily",
    storageBucket: "kyrosildaily.appspot.com",
    messagingSenderId: "1093479840991",
    appId: "1:1093479840991:web:87a1e8eae7c457f8613d6a"
};

// --- KODUN GERİSİ ---

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// --- HTML ELEMANLARINI SEÇME ---
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const verificationMessage = document.getElementById('verification-message');
const mainApp = document.getElementById('main-app');

// Formlar ve Butonlar
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const googleLoginButton = document.getElementById('google-login-button');
const logoutButton = document.getElementById('logout-button');
const claimButton = document.getElementById('claim-button');

// Mesaj Alanları
const messageArea = document.getElementById('message-area');
const userDisplayName = document.getElementById('user-display-name');
const userEmailDisplay = document.getElementById('user-email');
const verifEmail = document.getElementById('verif-email');

// Ödül listesi
const rewards = ["%20 İndirim Kazandın!", "1 Ay Ücretsiz Üyelik!", "Sürpriz Kutu!", "Maalesef, bu sefer olmadı."];

// --- FORM GEÇİŞLERİ ---
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// --- ANA FONKSİYONLAR ---

// Kullanıcı giriş/çıkış durumunu dinle
auth.onAuthStateChanged(user => {
    if (user) {
        // Kullanıcı giriş yaptı
        authContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        
        if (user.emailVerified) {
            // E-postası ONAYLANMIŞSA ana uygulamayı göster
            verificationMessage.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Kullanıcı bilgilerini Firestore'dan çek ve göster
            const userRef = db.collection('users').doc(user.uid);
            userRef.get().then(doc => {
                if (doc.exists) {
                    userDisplayName.textContent = doc.data().name || user.email; // Veritabanında adı varsa onu, yoksa e-postasını göster
                } else {
                    userDisplayName.textContent = user.email;
                }
            });
            userEmailDisplay.textContent = `E-posta: ${user.email}`;

        } else {
            // E-postası ONAYLANMAMIŞSA onay mesajını göster
            verificationMessage.classList.remove('hidden');
            mainApp.classList.add('hidden');
            verifEmail.textContent = user.email;
        }

    } else {
        // Kullanıcı çıkış yaptı
        authContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    }
});

// Üye Olma Butonu
signupButton.addEventListener('click', () => {
    // Mevcut alanları oku
    const name = document.getElementById('signup-name').value;
    const surname = document.getElementById('signup-surname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Yeni eklediğimiz alanları oku
    const platform = document.getElementById('signup-platform').value;
    const platformUsername = document.getElementById('signup-platform-username').value;

    // Alanların boş olup olmadığını kontrol et
    if (!name || !email || !password || !platform || !platformUsername) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            
            // 1. E-posta onayı gönder
            user.sendEmailVerification();

            // 2. Kullanıcı bilgilerini YENİ YAPIYLA Firestore'a kaydet
            return db.collection('users').doc(user.uid).set({
                name: name,
                surname: surname,
                email: email,
                followedPlatform: platform, // Yeni alan
                platformUsername: platformUsername, // Yeni alan
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("Harika! Üyeliğin oluşturuldu. Lütfen e-postanı kontrol ederek hesabını onayla.");
        })
        .catch(error => {
            alert("Hata: " + error.message);
        });
});

// Giriş Yapma Butonu
loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert("Hata: " + error.message);
        });
});

// Google ile Giriş Butonu
googleLoginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const userRef = db.collection('users').doc(user.uid);

            // Veritabanında bu kullanıcı var mı diye kontrol et
            return userRef.get().then(doc => {
                if (!doc.exists) {
                    // Eğer yoksa (yani ilk kez Google ile giriyorsa), bilgilerini kaydet
                    userRef.set({
                        name: user.displayName.split(' ')[0], // Google isminin ilk kelimesi
                        surname: user.displayName.split(' ').slice(1).join(' '), // Google isminin geri kalanı
                        email: user.email,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
            });
        })
        .catch(error => {
            alert("Google ile giriş sırasında hata: " + error.message);
        });
});


// Çıkış Yapma Butonu
logoutButton.addEventListener('click', () => {
    auth.signOut();
});

// Ödül Alma Butonu
claimButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user || !user.emailVerified) return; // Kullanıcı yoksa veya e-postası onaylı değilse işlem yapma

    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();

    const now = new Date();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (doc.exists && doc.data().lastClaim) {
        const lastClaimDate = doc.data().lastClaim.toDate();
        if (now.getTime() - lastClaimDate.getTime() < twentyFourHours) {
            messageArea.textContent = 'Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!';
            messageArea.style.backgroundColor = '#ffc107';
            return;
        }
    }

    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

    await userRef.set({
        lastClaim: now,
        lastReward: randomReward
    }, { merge: true });

    messageArea.textContent = `Tebrikler! Ödülün: ${randomReward}`;
    messageArea.style.backgroundColor = '#28a745';
});
