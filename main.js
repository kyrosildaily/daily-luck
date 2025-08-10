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

// --- DİL ÇEVİRİLERİ VE MANTIK ---
const translations = {
    en: {
        mainHeadline: "You're much closer to the grand prize every 24 hours!",
        howItWorksTitle: "Purpose and Logic of the Game",
        step1Title: "Create Your Account",
        step1Desc: "Sign up for free or log in with your Google account.",
        step2Title: "Try Your Chance",
        step2Desc: "After logging in, press the daily reward button.",
        step3Title: "Grab the Prize!",
        step3Desc: "See your prize instantly and enjoy!",
        rewardsTitle: "Prizes",
        grandRewardsTitle: "Grand Prizes",
        grandRewardsList: `<li>5,000 EURO Cash</li><li>Turkish Airlines $1000 Gift Voucher</li><li>3 Nights 4 Days Santorini Holiday</li><li>3-Day Historical Tour in Athens with Kyrosil</li>`,
        otherRewardsTitle: "Other Prizes",
        otherRewardsList: `<li>Trendyol 50€ or 2,000₺ Gift Voucher</li><li>Adidas 100€ or 5,000₺ Gift Voucher</li><li>CarrefourSA 50€ or 2,000₺ Gift Voucher</li><li>50 USDT Cash</li><li>THY One-Way Ticket (Select Routes)</li><li>Burger King & Starbucks Gift Vouchers</li>`,
        rewardsNote: "Prizes will be updated continuously.",
        loginTitle: "Log In",
        emailPlaceholder: "E-mail",
        passwordPlaceholder: "Password",
        loginButton: "Log In",
        noAccount: "Don't have an account?",
        signUpLink: "Sign Up",
        signUpTitle: "Sign Up",
        namePlaceholder: "First Name",
        surnamePlaceholder: "Last Name",
        platformLabel: "Followed Social Media:",
        platformPlaceholder: "Please select a platform...",
        platformUsernamePlaceholder: "Your username on the selected platform",
        passwordMinChar: "Password (at least 6 characters)",
        signUpButton: "Sign Up",
        alreadyAccount: "Already have an account?",
        loginLink: "Log In",
        orText: "or",
        googleLoginButton: "Sign in with Google",
        verifTitle: "Great!",
        verifDesc1: "One last step. Please verify your email by clicking the link we sent to ",
        verifDesc2: ". You can refresh the page after verification.",
        welcomeMessage: "Welcome",
        tryChanceButton: "Try My Chance!",
        logoutButton: "Log Out",
        spinningButton: "Spinning...",
        comeBackTomorrow: "See You Tomorrow!",
        limitUsed: "You have used your daily limit. Please try again tomorrow!",
        congratsMessage: "Congratulations! Your prize is: ",
        tryAgainMessage: "Try Again Tomorrow"
    },
    tr: {
        mainHeadline: "Her 24 saatte bir büyük ödüle çok daha yakınsın!",
        howItWorksTitle: "Oyunun Amacı ve Mantığı",
        step1Title: "Hesabını Oluştur",
        step1Desc: "Hemen ücretsiz bir hesap oluştur veya Google ile giriş yap.",
        step2Title: "Şansını Dene",
        step2Desc: "Giriş yaptıktan sonra günlük ödül butonuna bas.",
        step3Title: "Ödülü Kap!",
        step3Desc: "Kazandığın ödülü anında gör ve keyfini çıkar!",
        rewardsTitle: "Ödüller",
        grandRewardsTitle: "Büyük Ödüller",
        grandRewardsList: `<li>5.000 EURO Nakit</li><li>Türk Hava Yolları 1000$ Hediye Çeki</li><li>3 Gece 4 Gün Santorini Tatili</li><li>Kyrosil ile Atina'da 3 Gün Tarih Gezisi</li>`,
        otherRewardsTitle: "Diğer Ödüller",
        otherRewardsList: `<li>Trendyol 50€ veya 2.000₺ Hediye Çeki</li><li>Adidas 100€ veya 5.000₺ Hediye Çeki</li><li>CarrefourSA 50€ veya 2.000₺ Hediye Çeki</li><li>50 USDT Nakit</li><li>THY Tek Yön Bilet (Belirli Hatlar)</li><li>Burger King & Starbucks Hediye Çekleri</li>`,
        rewardsNote: "Ödüller sürekli güncellenecektir.",
        loginTitle: "Giriş Yap",
        emailPlaceholder: "E-posta",
        passwordPlaceholder: "Şifre",
        loginButton: "Giriş Yap",
        noAccount: "Hesabın yok mu?",
        signUpLink: "Üye Ol",
        signUpTitle: "Üye Ol",
        namePlaceholder: "İsim",
        surnamePlaceholder: "Soyisim",
        platformLabel: "Takip Edilen Sosyal Medya:",
        platformPlaceholder: "Lütfen bir platform seçin...",
        platformUsernamePlaceholder: "Seçtiğiniz Platformdaki Kullanıcı Adınız",
        passwordMinChar: "Şifre (en az 6 karakter)",
        signUpButton: "Üye Ol",
        alreadyAccount: "Zaten üye misin?",
        loginLink: "Giriş Yap",
        orText: "veya",
        googleLoginButton: "Google ile Giriş Yap",
        verifTitle: "Harika!",
        verifDesc1: "Son bir adım kaldı. Lütfen e-postanı kontrol ederek ",
        verifDesc2: " adresine gönderdiğimiz linke tıkla. Onayladıktan sonra sayfayı yenileyebilirsin.",
        welcomeMessage: "Hoş Geldin",
        tryChanceButton: "Şansımı Dene!",
        logoutButton: "Çıkış Yap",
        spinningButton: "Çark Dönüyor...",
        comeBackTomorrow: "Yarın Tekrar Görüşürüz!",
        limitUsed: "Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!",
        congratsMessage: "Tebrikler! Ödülün: ",
        tryAgainMessage: "Yarın Tekrar Dene"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-placeholder-key]').forEach(elem => {
        const key = elem.getAttribute('data-placeholder-key');
        if (translations[lang][key]) {
            elem.placeholder = translations[lang][key];
        }
    });

    const platformSelect = document.getElementById('signup-platform');
    if (platformSelect) {
        platformSelect.innerHTML = `
            <option value="">${translations[lang].platformPlaceholder}</option>
            <option value="EU Portal">EU Portal</option>
            <option value="Instagram">Instagram</option>
            <option value="X">X (Twitter)</option>
            <option value="TikTok">TikTok</option>
            <option value="Linkedin">Linkedin</option>
        `;
    }

    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-tr').classList.toggle('active', lang === 'tr');
};


// --- HTML ELEMANLARINI SEÇME ---
const mainContainer = document.querySelector('.main-container');
const appContainer = document.getElementById('app-container');
const verificationMessage = document.getElementById('verification-message');
const mainApp = document.getElementById('main-app');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const googleLoginButton = document.getElementById('google-login-button');
const logoutButton = document.getElementById('logout-button');
const claimButton = document.getElementById('claim-button');
const messageArea = document.getElementById('message-area');
const userDisplayName = document.getElementById('user-display-name');
const userEmailDisplay = document.getElementById('user-email');
const verifEmail = document.getElementById('verif-email');
const langEnButton = document.getElementById('lang-en');
const langTrButton = document.getElementById('lang-tr');


// ÖDÜL YAPISI (ÇİFT DİLLİ)
const rewards = [
    { id: 'try-again', name_tr: 'Yarın Tekrar Dene', name_en: 'Try Again Tomorrow', chance: 80, rarity: 'common', imageUrl: 'https://img.icons8.com/ios/100/recurring-appointment.png' },
    { id: 'bk-sb', name_tr: 'Burger King & Starbucks Çekleri', name_en: 'Burger King & Starbucks Vouchers', chance: 5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/coffee-to-go.png' },
    { id: 'thy-bilet', name_tr: 'THY Tek Yön Bilet', name_en: 'THY One-Way Ticket', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/airport.png' },
    { id: 'usdt-50', name_tr: '50 USDT Nakit', name_en: '50 USDT Cash', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/us-dollar-circled.png' },
    { id: 'carrefour', name_tr: 'CarrefourSA Hediye Çeki', name_en: 'CarrefourSA Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/shopping-cart.png' },
    { id: 'adidas', name_tr: 'Adidas Hediye Çeki', name_en: 'Adidas Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/trainers.png' },
    { id: 'trendyol', name_tr: 'Trendyol Hediye Çeki', name_en: 'Trendyol Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/online-store.png' },
    { id: 'atina', name_tr: 'Atina\'da Tarih Gezisi', name_en: 'Historical Tour in Athens', chance: 0.8, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/parthenon.png' },
    { id: 'santorini', name_tr: 'Santorini Tatili', name_en: 'Santorini Holiday', chance: 0.7, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/beach.png' },
    { id: 'thy-1000', name_tr: 'THY 1000$ Hediye Çeki', name_en: 'THY $1000 Gift Voucher', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/gift-card.png' },
    { id: 'nakit-5000', name_tr: '5.000 EURO Nakit', name_en: '5,000 EURO Cash', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/money-bag.png' }
];

// --- OLAY DİNLEYİCİLERİ ---
document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
langEnButton.addEventListener('click', () => setLanguage('en'));
langTrButton.addEventListener('click', () => setLanguage('tr'));

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
auth.onAuthStateChanged(user => {
    if (user) {
        mainContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        
        if (user.emailVerified) {
            verificationMessage.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            const userRef = db.collection('users').doc(user.uid);
            userRef.get().then(doc => {
                userDisplayName.textContent = (doc.exists && doc.data().name) ? doc.data().name : user.email;
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

signupButton.addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const surname = document.getElementById('signup-surname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const platform = document.getElementById('signup-platform').value;
    const platformUsername = document.getElementById('signup-platform-username').value;

    if (!name || !email || !password || !platform || !platformUsername) {
        alert("Please fill in all fields.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            user.sendEmailVerification();
            return db.collection('users').doc(user.uid).set({
                name, surname, email, followedPlatform: platform, platformUsername,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => alert("Great! Your account has been created. Please check your email to verify your account."))
        .catch(error => alert("Error: " + error.message));
});

loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert("Error: " + error.message));
});

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
        .catch(error => alert("Error during Google sign-in: " + error.message));
});

logoutButton.addEventListener('click', () => {
    auth.signOut().then(() => window.location.reload());
});

// YARDIMCI FONKSİYON: Belirtilen ID hariç rastgele bir ödül getirir.
const getRandomReward = (excludeId) => {
    const filteredRewards = rewards.filter(r => r.id !== excludeId);
    return filteredRewards[Math.floor(Math.random() * filteredRewards.length)];
};


// Ödül Alma Butonu (SON GÜNCELLEME: KOMŞU KONTROLÜ)
claimButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user || !user.emailVerified) return;

    claimButton.disabled = true;
    claimButton.textContent = translations[currentLang].spinningButton;
    messageArea.textContent = '';
    messageArea.style.backgroundColor = 'transparent';

    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();
    
    const now = new Date();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (doc.exists && doc.data().lastClaim) {
        const lastClaimDate = doc.data().lastClaim.toDate();
        if (now.getTime() - lastClaimDate.getTime() < twentyFourHours) {
            messageArea.textContent = translations[currentLang].limitUsed;
            messageArea.style.backgroundColor = '#ffc107';
            claimButton.disabled = false;
            claimButton.textContent = translations[currentLang].tryChanceButton;
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

    let reelItems = [];
    const reelLength = 50;
    const winningIndex = reelLength - 5; 
    
    for(let i = 0; i < reelLength; i++) {
        reelItems.push(rewards[Math.floor(Math.random() * rewards.length)]);
    }

    reelItems[winningIndex] = winner;

    // YENİ EKLENEN KONTROL: Kazananın komşuları aynıysa değiştir.
    if (winningIndex > 0 && reelItems[winningIndex - 1].id === winner.id) {
        reelItems[winningIndex - 1] = getRandomReward(winner.id);
    }
    if (winningIndex < reelLength - 1 && reelItems[winningIndex + 1].id === winner.id) {
        reelItems[winningIndex + 1] = getRandomReward(winner.id);
    }
    
    reelItems.forEach(item => {
        const div = document.createElement('div');
        const itemName = item[`name_${currentLang}`];
        div.className = `spinner-item rarity-${item.rarity}`;
        div.innerHTML = `<img src="${item.imageUrl}" alt="${itemName}"><p>${itemName}</p>`;
        reel.appendChild(div);
    });

    setTimeout(() => {
        reel.style.transition = 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        const itemWidth = 120;
        const containerWidth = reel.parentElement.offsetWidth;
        const targetPosition = winningIndex * itemWidth;
        const centeringOffset = (containerWidth / 2) - (itemWidth / 2);
        const finalPosition = -(targetPosition - centeringOffset);

        reel.style.transform = `translateX(${finalPosition}px)`;
    }, 100);

    setTimeout(async () => {
        const winnerName = winner[`name_${currentLang}`];
        if(winner.id === 'try-again') {
            messageArea.textContent = winnerName;
            messageArea.style.backgroundColor = '#ffc107';
        } else {
            messageArea.textContent = `${translations[currentLang].congratsMessage}${winnerName}`;
            messageArea.style.backgroundColor = winner.rarity === 'legendary' ? '#ffb703' : '#28a745';
        }
        
        claimButton.disabled = true;
        claimButton.textContent = translations[currentLang].comeBackTomorrow;
        
        await userRef.set({
            lastClaim: now,
            lastReward: winner.name_en
        }, { merge: true });

    }, 5500);
});
