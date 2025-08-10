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
const mainContainer = document.querySelector('.main-container');
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


// YENİ ÖDÜL YAPISI (YÜZDELER VE GÖRSELLERLE)
// Not: İkonlar https://icons8.com/ adresinden alınmıştır. Daha sonra değiştirilebilir.
const rewards = [
    { id: 'try-again', name: 'Yarın Tekrar Dene', chance: 80, rarity: 'common', imageUrl: 'https://img.icons8.com/ios/100/recurring-appointment.png' },
    { id: 'bk-sb', name: 'Burger King & Starbucks Çekleri', chance: 5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/coffee-to-go.png' },
    { id: 'thy-bilet', name: 'THY Tek Yön Bilet', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/airport.png' },
    { id: 'usdt-50', name: '50 USDT Nakit', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/us-dollar-circled.png' },
    { id: 'carrefour', name: 'CarrefourSA Hediye Çeki', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/shopping-cart.png' },
    { id: 'adidas', name: 'Adidas Hediye Çeki', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/trainers.png' },
    { id: 'trendyol', name: 'Trendyol Hediye Çeki', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/online-store.png' },
    { id: 'atina', name: 'Atina\'da Tarih Gezisi', chance: 0.8, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/parthenon.png' },
    { id: 'santorini', name: 'Santorini Tatili', chance: 0.7, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/beach.png' },
    { id: 'thy-1000', name: 'THY 1000$ Hediye Çeki', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/gift-card.png' },
    { id: 'nakit-5000', name: '5.000 EURO Nakit', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/money-bag.png' }
];


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
        mainContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        
        if (user.emailVerified) {
            verificationMessage.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            const userRef = db.collection('users').doc(user.uid);
            userRef.get().then(doc => {
                if (doc.exists) {
                    userDisplayName.textContent = doc.data().name || user.email;
                } else {
                    userDisplayName.textContent = user.email;
                }
            });
            userEmailDisplay.textContent = `E-posta: ${user.email}`;

        } else {
            verificationMessage.classList.remove('hidden');
            mainApp.classList.add('hidden');
            verifEmail.textContent = user.email;
        }

    } else {
        mainContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    }
});

// Üye Olma Butonu
signupButton.addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const surname = document.getElementById('signup-surname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const platform = document.getElementById('signup-platform').value;
    const platformUsername = document.getElementById('signup-platform-username').value;

    if (!name || !email || !password || !platform || !platformUsername) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            user.sendEmailVerification();
            return db.collection('users').doc(user.uid).set({
                name: name,
                surname: surname,
                email: email,
                followedPlatform: platform,
                platformUsername: platformUsername,
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
            return userRef.get().then(doc => {
                if (!doc.exists) {
                    userRef.set({
                        name: user.displayName.split(' ')[0],
                        surname: user.displayName.split(' ').slice(1).join(' '),
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
    auth.signOut().then(() => {
        window.location.reload(); // Sayfayı yenileyerek ana sayfaya dön
    });
});

// Ödül Alma Butonu (YENİ ANİMASYONLU VE AĞIRLIKLI MANTIK)
claimButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user || !user.emailVerified) return;

    claimButton.disabled = true;
    claimButton.textContent = 'Çark Dönüyor...';
    messageArea.textContent = '';
    messageArea.style.backgroundColor = 'transparent';

    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();
    
    const now = new Date();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (doc.exists && doc.data().lastClaim) {
        const lastClaimDate = doc.data().lastClaim.toDate();
        if (now.getTime() - lastClaimDate.getTime() < twentyFourHours) {
            messageArea.textContent = 'Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!';
            messageArea.style.backgroundColor = '#ffc107';
            claimButton.disabled = false;
            claimButton.textContent = 'Şansımı Dene!';
            return;
        }
    }

    const weightedPool = [];
    rewards.forEach(reward => {
        const weight = reward.chance * 10;
        for (let i = 0; i < weight; i++) {
            weightedPool.push(reward);
        }
    });
    const winner = weightedPool[Math.floor(Math.random() * weightedPool.length)];

    const reel = document.querySelector('.spinner-reel');
    reel.style.transition = 'none';
    reel.style.transform = 'translateX(0)';
    reel.innerHTML = '';

    const reelItems = [];
    const reelLength = 50;
    for(let i = 0; i < reelLength; i++) {
        const itemData = (i === reelLength - 5) ? winner : rewards[Math.floor(Math.random() * rewards.length)];
        reelItems.push(itemData);
    }
    
    reelItems.forEach(item => {
        const div = document.createElement('div');
        div.className = `spinner-item rarity-${item.rarity}`;
        div.innerHTML = `<img src="${item.imageUrl}" alt="${item.name}"><p>${item.name}</p>`;
        reel.appendChild(div);
    });

    setTimeout(() => {
        reel.style.transition = 'transform 5s cubic-bezier(0.2, 0.8, 0.25, 1)';
        const itemWidth = 120;
        const targetPosition = (reelLength - 5) * itemWidth;
        const containerWidth = reel.parentElement.offsetWidth;
        const offset = (containerWidth / 2) - (itemWidth / 2);
        const randomJitter = Math.floor(Math.random() * (itemWidth - 20)) - ((itemWidth - 20) / 2);
        
        const finalPosition = -targetPosition + offset + randomJitter;
        reel.style.transform = `translateX(${finalPosition}px)`;
    }, 100);

    setTimeout(async () => {
        if(winner.id === 'try-again') {
            messageArea.textContent = `${winner.name}`;
            messageArea.style.backgroundColor = '#ffc107';
        } else {
            messageArea.textContent = `Tebrikler! Ödülün: ${winner.name}`;
            messageArea.style.backgroundColor = winner.rarity === 'legendary' ? '#ffb703' : '#28a745';
        }
        
        claimButton.disabled = true;
        claimButton.textContent = 'Yarın Tekrar Görüşürüz!';
        
        await userRef.set({
            lastClaim: now,
            lastReward: winner.name
        }, { merge: true });

    }, 5500);
});
