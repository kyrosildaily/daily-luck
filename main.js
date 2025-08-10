// SENİN BİLGİLERİNLE DOLDURULDU, ARTIK HAZIR!
// Bu bilgileri bir daha kimseyle paylaşma.
const firebaseConfig = {
  apiKey: "AIzaSyCNpnXAc2ntwW61f2NnhVGrN_4wLFjwCZk",
  authDomain: "kyrosildaily.firebaseapp.com",
  projectId: "kyrosildaily",
  storageBucket: "kyrosildaily.appspot.com", // storageBucket "kyrosildaily.firebasestorage.app" değil, ".appspot.com" ile bitmeli. Düzelttim.
  messagingSenderId: "1093479840991",
  appId: "1:1093479840991:web:87a1e8eae7c457f8613d6a"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// HTML elemanlarını seç
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const logoutButton = document.getElementById('logout-button');
const claimButton = document.getElementById('claim-button');
const messageArea = document.getElementById('message-area');
const userEmailDisplay = document.getElementById('user-email');

// Ödül listesi (istediğin gibi değiştirebilirsin)
const rewards = ["%20 İndirim Kazandın!", "1 Ay Ücretsiz Üyelik!", "Sürpriz Kutu!", "Maalesef, bu sefer olmadı."];

// Kullanıcı giriş/çıkış durumunu dinle
auth.onAuthStateChanged(user => {
    if (user) {
        // Kullanıcı giriş yaptıysa
        authContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        userEmailDisplay.textContent = `E-posta: ${user.email}`;
    } else {
        // Kullanıcı çıkış yaptıysa
        authContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    }
});

// Üye Olma Butonu
signupButton.addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .catch(error => alert(error.message));
});

// Giriş Yapma Butonu
loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error.message));
});

// Çıkış Yapma Butonu
logoutButton.addEventListener('click', () => {
    auth.signOut();
});

// Ödül Alma Butonu
claimButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();

    const now = new Date();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 saatin milisaniye cinsi

    if (doc.exists && doc.data().lastClaim) {
        const lastClaimDate = doc.data().lastClaim.toDate();
        if (now.getTime() - lastClaimDate.getTime() < twentyFourHours) {
            messageArea.textContent = 'Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!';
            messageArea.style.backgroundColor = '#ffc107'; // Sarı renk
            return;
        }
    }

    // Rastgele bir ödül seç
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

    // Veritabanını güncelle
    await userRef.set({
        email: user.email,
        lastClaim: now,
        lastReward: randomReward
    }, { merge: true }); // merge:true ile eski verileri silmeden üstüne yazar

    // Mesajı göster
    messageArea.textContent = `Tebrikler! Ödülün: ${randomReward}`;
    messageArea.style.backgroundColor = '#28a745'; // Yeşil renk
});
