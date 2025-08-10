const firebaseConfig = {
    apiKey: "AIzaSyCNpnXAc2ntwW61f2NnhVGrN_4wLFjwCZk",
    authDomain: "kyrosildaily.firebaseapp.com",
    projectId: "kyrosildaily",
    storageBucket: "kyrosildaily.appspot.com",
    messagingSenderId: "1093479840991",
    appId: "1:1093479840991:web:87a1e8eae7c457f8613d6a"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const translations = {
    en: {
        mainHeadline: "You're much closer to the grand prize every 24 hours!", howItWorksTitle: "Purpose and Logic of the Game", step1Title: "Create Your Account", step1Desc: "Sign up for free or log in with your Google account.", step2Title: "Try Your Chance", step2Desc: "After logging in, press the daily reward button.", step3Title: "Grab the Prize!", step3Desc: "See your prize instantly and enjoy!", rewardsTitle: "Prizes", grandRewardsTitle: "Grand Prizes", grandRewardsList: `<li>5,000 EURO Cash</li><li>Turkish Airlines $1000 Gift Voucher</li><li>3 Nights 4 Days Santorini Holiday</li><li>3-Day Historical Tour in Athens with Kyrosil</li>`, otherRewardsTitle: "Other Prizes", otherRewardsList: `<li>Trendyol 50€ or 2,000₺ Gift Voucher</li><li>Adidas 100€ or 5,000₺ Gift Voucher</li><li>CarrefourSA 50€ or 2,000₺ Gift Voucher</li><li>50 USDT Cash</li><li>THY One-Way Ticket (Select Routes)</li><li>Burger King & Starbucks Gift Vouchers</li>`, rewardsNote: "Prizes will be updated continuously.", loginTitle: "Log In", emailPlaceholder: "E-mail", passwordPlaceholder: "Password", loginButton: "Log In", noAccount: "Don't have an account?", signUpLink: "Sign Up", signUpTitle: "Sign Up", namePlaceholder: "First Name", surnamePlaceholder: "Last Name", platformLabel: "Followed Social Media:", platformPlaceholder: "Please select a platform...", platformUsernamePlaceholder: "Your username on the selected platform", passwordMinChar: "Password (at least 6 characters)", signUpButton: "Sign Up", alreadyAccount: "Already have an account?", loginLink: "Log In", orText: "or", googleLoginButton: "Sign in with Google", verifTitle: "Great!", verifDesc1: "One last step. Please verify your email by clicking the link we sent to ", verifDesc2: ". You can refresh the page after verification.", welcomeMessage: "Welcome", tryChanceButton: "Try My Chance!", logoutButton: "Log Out", spinningButton: "Spinning...", comeBackTomorrow: "See You Tomorrow!", limitUsed: "You have used your daily limit. Please try again tomorrow!", congratsMessage: "Congratulations! Your prize is: ", tryAgainMessage: "Try Again Tomorrow", winnerContactMessage: "<br><small>Our team will contact you via e-mail within 12 hours. You can also write to us at dailywin@kyrosil.eu.</small>", completeProfileTitle: "Complete Your Profile", completeProfileDesc: "Welcome! To continue, please confirm your details and provide your social media information.", saveProfileButton: "Save and Continue", spinsRemaining: "Spins Remaining", nextSpinIn: "Next Spin In", extraSpinsTitle: "Get Extra Spins!", extraSpinsDesc: "Your social media information is saved in your profile. Our team can review it and add extra spins to your account.", taskFollowInstagram: "Follow on Instagram", taskFollowX: "Follow on X", taskVisitWebsite: "Visit our Website", winningsHistoryTitle: "Winnings History", noWinnings: "No prizes won yet.", editProfileButton: "Edit Profile", editProfileTitle: "Edit Your Profile", nameLabel: "First Name:", surnameLabel: "Last Name:", saveChangesButton: "Save Changes", cancelButton: "Cancel", taskEuPortal: "Follow on EU Portal"
    },
    tr: {
        mainHeadline: "Her 24 saatte bir büyük ödüle çok daha yakınsın!", howItWorksTitle: "Oyunun Amacı ve Mantığı", step1Title: "Hesabını Oluştur", step1Desc: "Hemen ücretsiz bir hesap oluştur veya Google ile giriş yap.", step2Title: "Şansını Dene", step2Desc: "Giriş yaptıktan sonra günlük ödül butonuna bas.", step3Title: "Ödülü Kap!", step3Desc: "Kazandığın ödülü anında gör ve keyfini çıkar!", rewardsTitle: "Ödüller", grandRewardsTitle: "Büyük Ödüller", grandRewardsList: `<li>5.000 EURO Nakit</li><li>Türk Hava Yolları 1000$ Hediye Çeki</li><li>3 Gece 4 Gün Santorini Tatili</li><li>Kyrosil ile Atina'da 3 Gün Tarih Gezisi</li>`, otherRewardsTitle: "Diğer Ödüller", otherRewardsList: `<li>Trendyol 50€ veya 2.000₺ Hediye Çeki</li><li>Adidas 100€ veya 5.000₺ Hediye Çeki</li><li>CarrefourSA 50€ veya 2.000₺ Hediye Çeki</li><li>50 USDT Nakit</li><li>THY Tek Yön Bilet (Belirli Hatlar)</li><li>Burger King & Starbucks Hediye Çekleri</li>`, rewardsNote: "Ödüller sürekli güncellenecektir.", loginTitle: "Giriş Yap", emailPlaceholder: "E-posta", passwordPlaceholder: "Şifre", loginButton: "Giriş Yap", noAccount: "Hesabın yok mu?", signUpLink: "Üye Ol", signUpTitle: "Üye Ol", namePlaceholder: "İsim", surnamePlaceholder: "Soyisim", platformLabel: "Takip Edilen Sosyal Medya:", platformPlaceholder: "Lütfen bir platform seçin...", platformUsernamePlaceholder: "Seçtiğiniz Platformdaki Kullanıcı Adınız", passwordMinChar: "Şifre (en az 6 karakter)", signUpButton: "Üye Ol", alreadyAccount: "Zaten üye misin?", loginLink: "Giriş Yap", orText: "veya", googleLoginButton: "Google ile Giriş Yap", verifTitle: "Harika!", verifDesc1: "Son bir adım kaldı. Lütfen ", verifDesc2: " adresine gönderdiğimiz linke tıkla. Onayladıktan sonra sayfayı yenileyebilirsin.", welcomeMessage: "Hoş Geldin", tryChanceButton: "Şansımı Dene!", logoutButton: "Çıkış Yap", spinningButton: "Çark Dönüyor...", comeBackTomorrow: "Yarın Tekrar Görüşürüz!", limitUsed: "Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!", congratsMessage: "Tebrikler! Ödülün: ", tryAgainMessage: "Yarın Tekrar Dene", winnerContactMessage: "<br><small>Ekibimiz 12 saat içinde e-posta üzerinden sizinle iletişime geçecektir. Dilerseniz siz de dailywin@kyrosil.eu adresine yazabilirsiniz.</small>", completeProfileTitle: "Profilini Tamamla", completeProfileDesc: "Hoş geldin! Devam etmek için lütfen bilgilerini onayla ve sosyal medya bilgilerini gir.", saveProfileButton: "Kaydet ve Devam Et", spinsRemaining: "Kalan Hak", nextSpinIn: "Sonraki Hak", extraSpinsTitle: "Ekstra Hak Kazan!", extraSpinsDesc: "Sosyal medya bilgileriniz profilinizde kayıtlıdır. Ekibimiz kontrol ederek hesabınıza ekstra haklar ekleyebilir.", taskFollowInstagram: "Instagram'da Takip Et", taskFollowX: "X'te Takip Et", taskVisitWebsite: "Websitemizi Ziyaret Et", winningsHistoryTitle: "Kazanç Geçmişi", noWinnings: "Henüz kazanılmış bir ödül yok.", editProfileButton: "Profilimi Düzenle", editProfileTitle: "Profilini Düzenle", nameLabel: "İsim:", surnameLabel: "Soyisim:", saveChangesButton: "Değişiklikleri Kaydet", cancelButton: "İptal", taskEuPortal: "EU Portal'da Takip Et"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let countdownInterval;

const rewards = [
    { id: 'try-again', name_tr: 'Yarın Tekrar Dene', name_en: 'Try Again Tomorrow', chance: 80, rarity: 'common', imageUrl: 'https://img.icons8.com/ios/100/recurring-appointment.png' }, { id: 'bk-sb', name_tr: 'Burger King & Starbucks Çekleri', name_en: 'Burger King & Starbucks Vouchers', chance: 5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/coffee-to-go.png' }, { id: 'thy-bilet', name_tr: 'THY Tek Yön Bilet', name_en: 'THY One-Way Ticket', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/airport.png' }, { id: 'usdt-50', name_tr: '50 USDT Nakit', name_en: '50 USDT Cash', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/us-dollar-circled.png' }, { id: 'carrefour', name_tr: 'CarrefourSA Hediye Çeki', name_en: 'CarrefourSA Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/shopping-cart.png' }, { id: 'adidas', name_tr: 'Adidas Hediye Çeki', name_en: 'Adidas Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/trainers.png' }, { id: 'trendyol', name_tr: 'Trendyol Hediye Çeki', name_en: 'Trendyol Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/online-store.png' }, { id: 'atina', name_tr: 'Atina\'da Tarih Gezisi', name_en: 'Historical Tour in Athens', chance: 0.8, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/parthenon.png' }, { id: 'santorini', name_tr: 'Santorini Tatili', name_en: 'Santorini Holiday', chance: 0.7, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/beach.png' }, { id: 'thy-1000', name_tr: 'THY 1000$ Hediye Çeki', name_en: 'THY $1000 Gift Voucher', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/gift-card.png' }, { id: 'nakit-5000', name_tr: '5.000 EURO Nakit', name_en: '5,000 EURO Cash', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/money-bag.png' }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.main-container');
    const appContainer = document.getElementById('app-container');
    const verificationMessage = document.getElementById('verification-message');
    const mainApp = document.getElementById('main-app');
    const onboardingModal = document.getElementById('onboarding-modal');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const googleLoginButton = document.getElementById('google-login-button');
    const logoutButton = document.getElementById('logout-button');
    const claimButton = document.getElementById('claim-button');
    const onboardingSubmitButton = document.getElementById('onboarding-submit');
    const editProfileButton = document.getElementById('edit-profile-button');
    const editProfileSubmitButton = document.getElementById('edit-profile-submit');
    const editProfileCancelButton = document.getElementById('edit-profile-cancel');
    const langEnButton = document.getElementById('lang-en');
    const langTrButton = document.getElementById('lang-tr');

    const platforms = ['EU Portal', 'Instagram', 'X', 'TikTok', 'Linkedin'];

    const showView = (viewName) => {
        if (mainContainer) mainContainer.classList.add('hidden');
        if (appContainer) appContainer.classList.add('hidden');
        if (mainApp) mainApp.classList.add('hidden');
        if (verificationMessage) verificationMessage.classList.add('hidden');
        if (onboardingModal) onboardingModal.classList.add('hidden');
        if (editProfileModal) editProfileModal.classList.add('hidden');

        if (viewName === 'login') { if (mainContainer) mainContainer.classList.remove('hidden'); }
        else if (viewName === 'app') { if (appContainer) appContainer.classList.remove('hidden'); if (mainApp) mainApp.classList.remove('hidden');}
        else if (viewName === 'verify') { if (appContainer) appContainer.classList.remove('hidden'); if (verificationMessage) verificationMessage.classList.remove('hidden');}
        else if (viewName === 'onboarding') { if (onboardingModal) onboardingModal.classList.remove('hidden'); }
        else if (viewName === 'editProfile') { if (editProfileModal) editProfileModal.classList.remove('hidden'); }
    };
    
    const setLanguage = (lang) => {
        currentLang = lang; localStorage.setItem('lang', lang); document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(elem => { if(elem) elem.innerHTML = translations[lang][elem.getAttribute('data-key')] || ''; });
        document.querySelectorAll('[data-placeholder-key]').forEach(elem => { if(elem) elem.placeholder = translations[lang][elem.getAttribute('data-placeholder-key')] || ''; });
        if (langEnButton) langEnButton.classList.toggle('active', lang === 'en');
        if (langTrButton) langTrButton.classList.toggle('active', lang === 'tr');
    };

    const updateCountdown = (claimTimestamp) => {
        if (countdownInterval) clearInterval(countdownInterval);
        const countdownEl = document.getElementById('countdown-timer');
        if (!countdownEl) return;
        const nextClaimTime = claimTimestamp + (24 * 60 * 60 * 1000);
        countdownInterval = setInterval(() => {
            const distance = nextClaimTime - new Date().getTime();
            if (distance < 0) {
                clearInterval(countdownInterval); countdownEl.textContent = "00:00:00"; return;
            }
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const s = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
            countdownEl.textContent = `${h}:${m}:${s}`;
        }, 1000);
    };

    const displayWinnings = async (userId) => {
        const listEl = document.getElementById('winnings-list');
        if (!listEl) return;
        listEl.innerHTML = `<li>${translations[currentLang].noWinnings}</li>`;
        const querySnapshot = await db.collection('users').doc(userId).collection('winnings').orderBy('timestamp', 'desc').limit(5).get();
        if (!querySnapshot.empty) {
            listEl.innerHTML = '';
            querySnapshot.forEach(doc => {
                const data = doc.data();
                const date = data.timestamp.toDate();
                const fDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                listEl.innerHTML += `<li><span>${data.rewardName}</span><span class="date">${fDate}</span></li>`;
            });
        }
    };
    
    const renderDashboard = (user, userData) => {
        showView('app');
        const userDisplayName = document.getElementById('user-display-name');
        if (userDisplayName) userDisplayName.textContent = userData.name;
        const spinCount = document.getElementById('spin-count');
        if (spinCount) spinCount.textContent = userData.dailySpins || 0;
        if ((userData.dailySpins || 0) < 1) {
            if (claimButton) {
                claimButton.disabled = true;
                claimButton.textContent = translations[currentLang].comeBackTomorrow;
            }
        } else {
            if (claimButton) {
                claimButton.disabled = false;
                claimButton.textContent = translations[currentLang].tryChanceButton;
            }
        }
        if (userData.lastClaim) { updateCountdown(userData.lastClaim.toDate().getTime()); }
        else { const countdownTimer = document.getElementById('countdown-timer'); if (countdownTimer) countdownTimer.textContent = '00:00:00'; }
        displayWinnings(user.uid);
    };

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userRef = db.collection('users').doc(user.uid);
            const doc = await userRef.get();
            if (!doc.exists) {
                return;
            }
            
            let userData = doc.data();
            const now = new Date();
            const lastLogin = userData.lastLogin ? userData.lastLogin.toDate() : new Date(0);
            
            if (now.setHours(0,0,0,0) > lastLogin.setHours(0,0,0,0)) {
                await userRef.update({ dailySpins: 1, lastLogin: now });
                userData.dailySpins = 1; 
            }
            
            if (!user.emailVerified) {
                showView('verify');
                if (verificationMessage) verificationMessage.innerHTML = `<p>${translations[currentLang].verifTitle} ${translations[currentLang].verifDesc1}<strong>${user.email}</strong>${translations[currentLang].verifDesc2}</p>`;
            } else if (userData.profileComplete === false) {
                showView('onboarding');
                const onboardingName = document.getElementById('onboarding-name');
                if (onboardingName) onboardingName.value = userData.name || '';
                const onboardingSurname = document.getElementById('onboarding-surname');
                if (onboardingSurname) onboardingSurname.value = userData.surname || '';
            } else {
                renderDashboard(user, userData);
            }
        } else {
            showView('login');
        }
        setLanguage(currentLang);
    });

    if (langEnButton) langEnButton.addEventListener('click', () => setLanguage('en'));
    if (langTrButton) langTrButton.addEventListener('click', () => setLanguage('tr'));
    if (showSignup) showSignup.addEventListener('click', (e) => { e.preventDefault(); if (loginForm) loginForm.classList.add('hidden'); if (signupForm) signupForm.classList.remove('hidden'); });
    if (showLogin) showLogin.addEventListener('click', (e) => { e.preventDefault(); if (signupForm) signupForm.classList.add('hidden'); if (loginForm) loginForm.classList.remove('hidden'); });

    const getSocialMediaData = (prefix) => {
        const socialMedia = {};
        platforms.forEach(platform => {
            const usernameInput = document.getElementById(`${prefix}-${platform.toLowerCase().replace(' ', '-')}-username`);
            if (usernameInput && usernameInput.value.trim()) {
                socialMedia[platform] = usernameInput.value.trim();
            }
        });
        return socialMedia;
    };

    if (onboardingSubmitButton) onboardingSubmitButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const nameInput = document.getElementById('onboarding-name');
        const surnameInput = document.getElementById('onboarding-surname');
        const name = nameInput ? nameInput.value : '';
        const surname = surnameInput ? surnameInput.value : '';
        const socialMedia = getSocialMediaData('onboarding');
        if (!name || !surname || Object.keys(socialMedia).length === 0) { return alert("Please fill name, surname, and at least one social media username."); }
        const userRef = db.collection('users').doc(user.uid);
        await userRef.update({ name, surname, socialMedia, profileComplete: true });
        const doc = await userRef.get();
        renderDashboard(user, doc.data());
    });

    if (editProfileButton) editProfileButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const doc = await db.collection('users').doc(user.uid).get();
        if (!doc.exists) return;
        const userData = doc.data();
        const editName = document.getElementById('edit-name');
        if (editName) editName.value = userData.name || '';
        const editSurname = document.getElementById('edit-surname');
        if (editSurname) editSurname.value = userData.surname || '';
        platforms.forEach(platform => {
            const usernameInput = document.getElementById(`edit-${platform.toLowerCase().replace(' ', '-')}-username`);
            if (usernameInput) {
                usernameInput.value = userData.socialMedia?.[platform] || '';
            }
        });
        showView('editProfile');
    });

    if (editProfileCancelButton) editProfileCancelButton.addEventListener('click', () => showView('app'));

    if (editProfileSubmitButton) editProfileSubmitButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const nameInput = document.getElementById('edit-name');
        const surnameInput = document.getElementById('edit-surname');
        const name = nameInput ? nameInput.value : '';
        const surname = surnameInput ? surnameInput.value : '';
        const socialMedia = getSocialMediaData('edit');
        if (!name || !surname || Object.keys(socialMedia).length === 0) { return alert("Please fill name, surname, and at least one social media username."); }
        const userRef = db.collection('users').doc(user.uid);
        await userRef.update({ name, surname, socialMedia });
        const doc = await userRef.get();
        renderDashboard(user, doc.data());
    });

    if (signupButton) signupButton.addEventListener('click', () => {
        const nameInput = document.getElementById('signup-name');
        const surnameInput = document.getElementById('signup-surname');
        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        const name = nameInput ? nameInput.value : '';
        const surname = surnameInput ? surnameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const password = passwordInput ? passwordInput.value : '';
        const socialMedia = getSocialMediaData('signup');
        if (!name || !surname || !email || !password || Object.keys(socialMedia).length === 0) return alert("Please fill in all fields and at least one social media username.");
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                user.sendEmailVerification();
                return db.collection('users').doc(user.uid).set({ name, surname, email, socialMedia, createdAt: firebase.firestore.FieldValue.serverTimestamp(), profileComplete: true, dailySpins: 1, lastLogin: new Date() });
            })
            .then(() => alert("Great! Your account has been created. Please check your email to verify your account."))
            .catch(error => alert("Error: " + error.message));
    });

    if (loginButton) loginButton.addEventListener('click', () => {
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        const email = emailInput ? emailInput.value : '';
        const password = passwordInput ? passwordInput.value : '';
        if (!email || !password) return alert("Please enter email and password.");
        auth.signInWithEmailAndPassword(email, password).catch(error => alert("Error: ".concat(error.message)));
    });

    if (googleLoginButton) googleLoginButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(async (result) => {
                const user = result.user;
                const userRef = db.collection('users').doc(user.uid);
                const doc = await userRef.get();
                if (!doc.exists) {
                    const [name, ...surnameParts] = user.displayName.split(' ');
                    const surname = surnameParts.join(' ');
                    await userRef.set({
                        name,
                        surname,
                        email: user.email,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        profileComplete: false,
                        dailySpins: 1,
                        lastLogin: new Date()
                    });
                    showView('onboarding');
                    const onboardingName = document.getElementById('onboarding-name');
                    if (onboardingName) onboardingName.value = name;
                    const onboardingSurname = document.getElementById('onboarding-surname');
                    if (onboardingSurname) onboardingSurname.value = surname;
                } else {
                    await userRef.update({ lastLogin: new Date() });
                    const updatedDoc = await userRef.get();
                    const userData = updatedDoc.data();
                    if (userData.profileComplete === false) {
                        showView('onboarding');
                        const onboardingName = document.getElementById('onboarding-name');
                        if (onboardingName) onboardingName.value = userData.name || '';
                        const onboardingSurname = document.getElementById('onboarding-surname');
                        if (onboardingSurname) onboardingSurname.value = userData.surname || '';
                    } else {
                        renderDashboard(user, userData);
                    }
                }
            })
            .catch(error => console.error("Google sign-in error", error));
    });

    if (logoutButton) logoutButton.addEventListener('click', () => auth.signOut());

    if (claimButton) claimButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user || !user.emailVerified) return;
        
        claimButton.disabled = true; claimButton.textContent = translations[currentLang].spinningButton;
        const messageArea = document.getElementById('message-area');
        if (messageArea) messageArea.innerHTML = '';
        
        const weightedPool = [];
        rewards.forEach(reward => { const weight = reward.chance * 10; for (let i = 0; i < weight; i++) weightedPool.push(reward); });
        const winner = weightedPool[Math.floor(Math.random() * weightedPool.length)];
        const reel = document.querySelector('.spinner-reel');
        if (reel) {
            reel.style.transition = 'none'; reel.style.transform = 'translateX(0)'; reel.innerHTML = '';
            const reelLength = 50, winningIndex = reelLength - 5;
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
                const finalPosition = (reel.parentElement.offsetWidth / 2) - (winningElement.offsetLeft + (winningElement.offsetWidth / 2));
                reel.style.transition = 'transform 5s cubic-bezier(0.1, 0, 0.2, 1)';
                reel.style.transform = `translateX(${finalPosition}px)`;
            }, 100);
        }

        setTimeout(async () => {
            const winnerName = winner[`name_${currentLang}`];
            let message = '';
            const userRef = db.collection('users').doc(user.uid);

            await db.collection('users').doc(user.uid).collection('winnings').add({
                rewardName: winner.name_en, timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            displayWinnings(user.uid);

            if(winner.id === 'try-again') {
                message = winnerName; if (messageArea) messageArea.style.backgroundColor = '#ffc700';
            } else {
                message = `${translations[currentLang].congratsMessage}${winnerName}${translations[currentLang].winnerContactMessage}`;
                if (messageArea) messageArea.style.backgroundColor = winner.rarity === 'legendary' ? 'var(--legendary-color)' : 'var(--rare-color)';
            }
            if (messageArea) messageArea.innerHTML = message;
            
            const now = new Date();
            const doc = await userRef.get();
            const currentSpins = doc.data().dailySpins || 0;
            await userRef.update({
                dailySpins: firebase.firestore.FieldValue.increment(-1),
                lastClaim: now
            });
            const spinCount = document.getElementById('spin-count');
            if (spinCount) spinCount.textContent = currentSpins - 1;

            if (currentSpins - 1 > 0) {
                claimButton.disabled = false;
                claimButton.textContent = translations[currentLang].tryChanceButton;
            } else {
                claimButton.textContent = translations[currentLang].comeBackTomorrow;
            }
            updateCountdown(now.getTime());

        }, 5500);
    });
    
    setLanguage(currentLang);
});
