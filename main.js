// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyCNpnXAc2ntwW61f2NnhVGrN_4wLFjwCZk",
    authDomain: "kyrosildaily.firebaseapp.com",
    projectId: "kyrosildaily",
    storageBucket: "kyrosildaily.appspot.com",
    messagingSenderId: "1093479840991",
    appId: "1:1093479840991:web:87a1e8eae7c457f8613d6a"
};

// UYGULAMA BAŞLATMA
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ÇEVİRİLER
const translations = {
    en: {
        mainHeadline: "You're much closer to the grand prize every 24 hours!", howItWorksTitle: "Purpose and Logic of the Game", step1Title: "Create Your Account", step1Desc: "Sign up for free or log in with your Google account.", step2Title: "Try Your Chance", step2Desc: "After logging in, press the daily reward button.", step3Title: "Grab the Prize!", step3Desc: "See your prize instantly and enjoy!", rewardsTitle: "Prizes", grandRewardsTitle: "Grand Prizes", grandRewardsList: `<li>5,000 EURO Cash</li><li>Turkish Airlines $1000 Gift Voucher</li><li>3 Nights 4 Days Santorini Holiday</li><li>3-Day Historical Tour in Athens with Kyrosil</li>`, otherRewardsTitle: "Other Prizes", otherRewardsList: `<li>Trendyol 50€ or 2,000₺ Gift Voucher</li><li>Adidas 100€ or 5,000₺ Gift Voucher</li><li>CarrefourSA 50€ or 2,000₺ Gift Voucher</li><li>50 USDT Cash</li><li>THY One-Way Ticket (Select Routes)</li><li>Burger King & Starbucks Gift Vouchers</li>`, rewardsNote: "Prizes will be updated continuously.", loginTitle: "Log In", emailPlaceholder: "E-mail", passwordPlaceholder: "Password", loginButton: "Log In", noAccount: "Don't have an account?", signUpLink: "Sign Up", signUpTitle: "Sign Up", namePlaceholder: "First Name", surnamePlaceholder: "Last Name", platformLabel: "Followed Social Media:", platformPlaceholder: "Please select a platform...", platformUsernamePlaceholder: "Your username on the selected platform", passwordMinChar: "Password (at least 6 characters)", signUpButton: "Sign Up", alreadyAccount: "Already have an account?", loginLink: "Log In", orText: "or", googleLoginButton: "Sign in with Google", verifTitle: "Great!", verifDesc1: "One last step. Please verify your email by clicking the link we sent to ", verifDesc2: ". You can refresh the page after verification.", welcomeMessage: "Welcome", tryChanceButton: "Try My Chance!", logoutButton: "Log Out", spinningButton: "Spinning...", comeBackTomorrow: "See You Tomorrow!", limitUsed: "You have used your daily limit. Please try again tomorrow!", congratsMessage: "Congratulations! Your prize is: ", tryAgainMessage: "Try Again Tomorrow", winnerContactMessage: "<br><small>Our team will contact you via e-mail within 12 hours. You can also write to us at dailywin@kyrosil.eu.</small>", completeProfileTitle: "Complete Your Profile", completeProfileDesc: "Welcome! To continue, please confirm your details and provide your social media information.", saveProfileButton: "Save and Continue", spinsRemaining: "Spins Remaining", nextSpinIn: "Next Spin In", extraSpinsTitle: "Get Extra Spins!", extraSpinsDesc: "Complete tasks and contact us. After manual approval, we will add extra spins to your account.", taskFollowInstagram: "Follow on Instagram", taskFollowX: "Follow on X", taskVisitWebsite: "Visit our Website", winningsHistoryTitle: "Winnings History", noWinnings: "No prizes won yet."
    },
    tr: {
        mainHeadline: "Her 24 saatte bir büyük ödüle çok daha yakınsın!", howItWorksTitle: "Oyunun Amacı ve Mantığı", step1Title: "Hesabını Oluştur", step1Desc: "Hemen ücretsiz bir hesap oluştur veya Google ile giriş yap.", step2Title: "Şansını Dene", step2Desc: "Giriş yaptıktan sonra günlük ödül butonuna bas.", step3Title: "Ödülü Kap!", step3Desc: "Kazandığın ödülü anında gör ve keyfini çıkar!", rewardsTitle: "Ödüller", grandRewardsTitle: "Büyük Ödüller", grandRewardsList: `<li>5.000 EURO Nakit</li><li>Türk Hava Yolları 1000$ Hediye Çeki</li><li>3 Gece 4 Gün Santorini Tatili</li><li>Kyrosil ile Atina'da 3 Gün Tarih Gezisi</li>`, otherRewardsTitle: "Diğer Ödüller", otherRewardsList: `<li>Trendyol 50€ veya 2.000₺ Hediye Çeki</li><li>Adidas 100€ veya 5.000₺ Hediye Çeki</li><li>CarrefourSA 50€ veya 2.000₺ Hediye Çeki</li><li>50 USDT Nakit</li><li>THY Tek Yön Bilet (Belirli Hatlar)</li><li>Burger King & Starbucks Hediye Çekleri</li>`, rewardsNote: "Ödüller sürekli güncellenecektir.", loginTitle: "Giriş Yap", emailPlaceholder: "E-posta", passwordPlaceholder: "Şifre", loginButton: "Giriş Yap", noAccount: "Hesabın yok mu?", signUpLink: "Üye Ol", signUpTitle: "Üye Ol", namePlaceholder: "İsim", surnamePlaceholder: "Soyisim", platformLabel: "Takip Edilen Sosyal Medya:", platformPlaceholder: "Lütfen bir platform seçin...", platformUsernamePlaceholder: "Seçtiğiniz Platformdaki Kullanıcı Adınız", passwordMinChar: "Şifre (en az 6 karakter)", signUpButton: "Üye Ol", alreadyAccount: "Zaten üye misin?", loginLink: "Giriş Yap", orText: "veya", googleLoginButton: "Google ile Giriş Yap", verifTitle: "Harika!", verifDesc1: "Son bir adım kaldı. Lütfen ", verifDesc2: " adresine gönderdiğimiz linke tıkla. Onayladıktan sonra sayfayı yenileyebilirsin.", welcomeMessage: "Hoş Geldin", tryChanceButton: "Şansımı Dene!", logoutButton: "Çıkış Yap", spinningButton: "Çark Dönüyor...", comeBackTomorrow: "Yarın Tekrar Görüşürüz!", limitUsed: "Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!", congratsMessage: "Tebrikler! Ödülün: ", tryAgainMessage: "Yarın Tekrar Dene", winnerContactMessage: "<br><small>Ekibimiz 12 saat içinde e-posta üzerinden sizinle iletişime geçecektir. Dilerseniz siz de dailywin@kyrosil.eu adresine yazabilirsiniz.</small>", completeProfileTitle: "Profilini Tamamla", completeProfileDesc: "Hoş geldin! Devam etmek için lütfen bilgilerini onayla ve sosyal medya bilgilerini gir.", saveProfileButton: "Kaydet ve Devam Et", spinsRemaining: "Kalan Hak", nextSpinIn: "Sonraki Hak", extraSpinsTitle: "Ekstra Hak Kazan!", extraSpinsDesc: "Görevleri tamamlayıp bizimle iletişime geçin. Manuel onay sonrası hesabınıza ekstra hak eklenecektir.", taskFollowInstagram: "Instagram'da Takip Et", taskFollowX: "X'te Takip Et", taskVisitWebsite: "Websitemizi Ziyaret Et", winningsHistoryTitle: "Kazanç Geçmişi", noWinnings: "Henüz kazanılmış bir ödül yok."
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let countdownInterval;

// DİL FONKSİYONU
const setLanguage = (lang) => {
    currentLang = lang; localStorage.setItem('lang', lang); document.documentElement.lang = lang;
    document.querySelectorAll('[data-key]').forEach(elem => { elem.innerHTML = translations[lang][elem.getAttribute('data-key')] || ''; });
    document.querySelectorAll('[data-placeholder-key]').forEach(elem => { elem.placeholder = translations[lang][elem.getAttribute('data-placeholder-key')] || ''; });
    const platformSelects = document.querySelectorAll('#signup-platform, #onboarding-platform');
    platformSelects.forEach(platformSelect => {
        if (platformSelect) { platformSelect.innerHTML = `<option value="">${translations[lang].platformPlaceholder}</option><option value="EU Portal">EU Portal</option><option value="Instagram">Instagram</option><option value="X">X (Twitter)</option><option value="TikTok">TikTok</option><option value="Linkedin">Linkedin</option>`; }
    });
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-tr').classList.toggle('active', lang === 'tr');
};

// HTML ELEMANLARI
const mainContainer = document.querySelector('.main-container');
const appContainer = document.getElementById('app-container');
const verificationMessage = document.getElementById('verification-message');
const mainApp = document.getElementById('main-app');
const onboardingModal = document.getElementById('onboarding-modal');
const authContainer = document.getElementById('auth-container');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const langEnButton = document.getElementById('lang-en');
const langTrButton = document.getElementById('lang-tr');
const logoutButton = document.getElementById('logout-button');
const claimButton = document.getElementById('claim-button');
const onboardingSubmitButton = document.getElementById('onboarding-submit');

// ÖDÜLLER
const rewards = [
    { id: 'try-again', name_tr: 'Yarın Tekrar Dene', name_en: 'Try Again Tomorrow', chance: 80, rarity: 'common', imageUrl: 'https://img.icons8.com/ios/100/recurring-appointment.png' }, { id: 'bk-sb', name_tr: 'Burger King & Starbucks Çekleri', name_en: 'Burger King & Starbucks Vouchers', chance: 5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/coffee-to-go.png' }, { id: 'thy-bilet', name_tr: 'THY Tek Yön Bilet', name_en: 'THY One-Way Ticket', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/airport.png' }, { id: 'usdt-50', name_tr: '50 USDT Nakit', name_en: '50 USDT Cash', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/us-dollar-circled.png' }, { id: 'carrefour', name_tr: 'CarrefourSA Hediye Çeki', name_en: 'CarrefourSA Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/shopping-cart.png' }, { id: 'adidas', name_tr: 'Adidas Hediye Çeki', name_en: 'Adidas Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/trainers.png' }, { id: 'trendyol', name_tr: 'Trendyol Hediye Çeki', name_en: 'Trendyol Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/online-store.png' }, { id: 'atina', name_tr: 'Atina\'da Tarih Gezisi', name_en: 'Historical Tour in Athens', chance: 0.8, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/parthenon.png' }, { id: 'santorini', name_tr: 'Santorini Tatili', name_en: 'Santorini Holiday', chance: 0.7, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/beach.png' }, { id: 'thy-1000', name_tr: 'THY 1000$ Hediye Çeki', name_en: 'THY $1000 Gift Voucher', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/gift-card.png' }, { id: 'nakit-5000', name_tr: '5.000 EURO Nakit', name_en: '5,000 EURO Cash', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/money-bag.png' }
];

// YARDIMCI FONKSİYONLAR
const updateCountdown = (claimTimestamp) => {
    if (countdownInterval) clearInterval(countdownInterval);
    const countdownEl = document.getElementById('countdown-timer');
    const nextClaimTime = claimTimestamp + (24 * 60 * 60 * 1000);

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextClaimTime - now;
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.textContent = "00:00:00";
            return;
        }
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        countdownEl.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
};

const displayWinnings = async (userId) => {
    const winningsListEl = document.getElementById('winnings-list');
    winningsListEl.innerHTML = '';
    try {
        const querySnapshot = await db.collection('users').doc(userId).collection('winnings').orderBy('timestamp', 'desc').limit(5).get();
        if (querySnapshot.empty) {
            winningsListEl.innerHTML = `<li>${translations[currentLang].noWinnings}</li>`;
        } else {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                const date = data.timestamp.toDate();
                const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                const li = document.createElement('li');
                li.innerHTML = `<span>${data.rewardName}</span><span class="date">${formattedDate}</span>`;
                winningsListEl.appendChild(li);
            });
        }
    } catch (error) {
        console.error("Error fetching winnings:", error);
        winningsListEl.innerHTML = `<li>Error loading history.</li>`;
    }
};

// ANA GİRİŞ KONTROLÜ
auth.onAuthStateChanged(async (user) => {
    if (user) {
        mainContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');

        if (!user.emailVerified) {
            mainApp.classList.add('hidden');
            onboardingModal.classList.add('hidden');
            verificationMessage.classList.remove('hidden');
            verificationMessage.innerHTML = `<p>${translations[currentLang].verifDesc1}<strong>${user.email}</strong>${translations[currentLang].verifDesc2}</p>`;
            return;
        }

        const userRef = db.collection('users').doc(user.uid);
        const doc = await userRef.get();

        if (doc.exists) {
            const userData = doc.data();
            const now = new Date();
            const lastLogin = userData.lastLogin ? userData.lastLogin.toDate() : new Date(0);
            
            const oneDay = 24 * 60 * 60 * 1000;
            if (now.setHours(0,0,0,0) > lastLogin.setHours(0,0,0,0)) {
                await userRef.update({ dailySpins: 1, lastLogin: now });
                document.getElementById('spin-count').textContent = 1;
            } else {
                document.getElementById('spin-count').textContent = userData.dailySpins || 0;
            }
            
            if (userData.profileComplete === false) {
                mainApp.classList.add('hidden');
                verificationMessage.classList.add('hidden');
                onboardingModal.classList.remove('hidden');
                document.getElementById('onboarding-name').value = userData.name || '';
                document.getElementById('onboarding-surname').value = userData.surname || '';
            } else {
                mainApp.classList.remove('hidden');
                verificationMessage.classList.add('hidden');
                onboardingModal.classList.add('hidden');
                document.getElementById('user-display-name').textContent = userData.name;
                document.getElementById('user-email').textContent = user.email;
                claimButton.disabled = (userData.dailySpins || 0) === 0;
                if (userData.lastClaim) {
                    updateCountdown(userData.lastClaim.toDate().getTime());
                }
                displayWinnings(user.uid);
            }
        }
    } else {
        mainContainer.classList.remove('hidden');
        appContainer.classList.add('hidden');
    }
});

// OLAY DİNLEYİCİLERİ
document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
langEnButton.addEventListener('click', () => setLanguage('en'));
langTrButton.addEventListener('click', () => setLanguage('tr'));
showSignup.addEventListener('click', (e) => { e.preventDefault(); authContainer.innerHTML = document.getElementById('signup-form-template').innerHTML; });
showLogin.addEventListener('click', (e) => { e.preventDefault(); authContainer.innerHTML = document.getElementById('login-form-template').innerHTML; });

logoutButton.addEventListener('click', () => auth.signOut().then(() => window.location.reload()));

onboardingSubmitButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;
    const name = document.getElementById('onboarding-name').value;
    const surname = document.getElementById('onboarding-surname').value;
    const platform = document.getElementById('onboarding-platform').value;
    const platformUsername = document.getElementById('onboarding-platform-username').value;
    if (!name || !surname || !platform || !platformUsername) { return alert("Please fill all fields"); }

    await db.collection('users').doc(user.uid).update({
        name, surname, followedPlatform: platform, platformUsername, profileComplete: true
    });
    onboardingModal.classList.add('hidden');
    window.location.reload();
});


authContainer.addEventListener('click', (e) => {
    if (e.target.id === 'show-signup' || e.target.id === 'signUpLink') {
        e.preventDefault();
        document.querySelector('.form-container.hidden')?.classList.remove('hidden');
        document.querySelector('#login-form')?.classList.add('hidden');
        document.querySelector('#signup-form')?.classList.remove('hidden');
    }
     if (e.target.id === 'show-login' || e.target.id === 'loginLink') {
        e.preventDefault();
        document.querySelector('.form-container.hidden')?.classList.remove('hidden');
        document.querySelector('#signup-form')?.classList.add('hidden');
        document.querySelector('#login-form')?.classList.remove('hidden');
    }

    if (e.target.id === 'signup-button') {
        const name = authContainer.querySelector('#signup-name').value;
        const surname = authContainer.querySelector('#signup-surname').value;
        const email = authContainer.querySelector('#signup-email').value;
        const password = authContainer.querySelector('#signup-password').value;
        const platform = authContainer.querySelector('#signup-platform').value;
        const platformUsername = authContainer.querySelector('#signup-platform-username').value;

        if (!name || !surname || !email || !password || !platform || !platformUsername) return alert("Please fill in all fields.");

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                user.sendEmailVerification();
                return db.collection('users').doc(user.uid).set({ name, surname, email, followedPlatform: platform, platformUsername, createdAt: firebase.firestore.FieldValue.serverTimestamp(), profileComplete: true, dailySpins: 1, lastLogin: new Date() });
            })
            .then(() => alert("Great! Your account has been created. Please check your email to verify your account."))
            .catch(error => alert("Error: " + error.message));
    }

    if (e.target.id === 'login-button') {
        const email = authContainer.querySelector('#login-email').value;
        const password = authContainer.querySelector('#login-password').value;
        if (!email || !password) return alert("Please enter email and password.");
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => alert("Error: " + error.message));
    }

    if (e.target.id === 'google-login-button') {
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
                            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                            profileComplete: false,
                            dailySpins: 1,
                            lastLogin: new Date()
                        });
                    }
                });
            })
            .catch(error => alert("Error during Google sign-in: " + error.message));
    }
});


claimButton.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user || !user.emailVerified) return;

    const userRef = db.collection('users').doc(user.uid);
    const doc = await userRef.get();
    if (!doc.exists || (doc.data().dailySpins || 0) === 0) {
        return alert("No spins remaining for today.");
    }

    claimButton.disabled = true;
    claimButton.textContent = translations[currentLang].spinningButton;
    messageArea.textContent = '';
    
    const weightedPool = [];
    rewards.forEach(reward => {
        const weight = reward.chance * 10;
        for (let i = 0; i < weight; i++) weightedPool.push(reward);
    });
    const winner = weightedPool[Math.floor(Math.random() * weightedPool.length)];

    const reel = document.querySelector('.spinner-reel');
    reel.style.transition = 'none';
    reel.style.transform = 'translateX(0)';
    reel.innerHTML = '';

    const reelLength = 50; 
    const winningIndex = reelLength - 5; 
    let reelItems = [];
    for(let i = 0; i < reelLength; i++) reelItems.push(rewards[Math.floor(Math.random() * rewards.length)]);
    reelItems[winningIndex] = winner;
    
    reelItems.forEach(item => {
        const div = document.createElement('div');
        div.className = `spinner-item rarity-${item.rarity}`;
        div.innerHTML = `<img src="${item.imageUrl}" alt="${item[`name_${currentLang}`]}"><p>${item[`name_${currentLang}`]}</p>`;
        reel.appendChild(div);
    });

    setTimeout(() => {
        const winningElement = reel.children[winningIndex];
        const container = reel.parentElement;
        const containerCenter = container.offsetWidth / 2;
        const elementCenter = winningElement.offsetLeft + (winningElement.offsetWidth / 2);
        const finalPosition = containerCenter - elementCenter;

        reel.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
        reel.style.transform = `translateX(${finalPosition}px)`;
    }, 100);

    setTimeout(async () => {
        const winnerName = winner[`name_${currentLang}`];
        let message = '';
        if(winner.id === 'try-again') {
            message = winnerName;
            messageArea.style.backgroundColor = '#ffc107';
        } else {
            message = `${translations[currentLang].congratsMessage}${winnerName}${translations[currentLang].winnerContactMessage}`;
            messageArea.style.backgroundColor = winner.rarity === 'legendary' ? '#ffb703' : '#28a745';
            await db.collection('users').doc(user.uid).collection('winnings').add({
                rewardName: winner.name_en,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            displayWinnings(user.uid);
        }
        messageArea.innerHTML = message;
        
        const now = new Date();
        await userRef.update({
            dailySpins: firebase.firestore.FieldValue.increment(-1),
            lastClaim: now
        });

        document.getElementById('spin-count').textContent = (doc.data().dailySpins || 1) - 1;
        claimButton.textContent = translations[currentLang].comeBackTomorrow;
        updateCountdown(now.getTime());

    }, 5500);
});
