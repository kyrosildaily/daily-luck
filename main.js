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
        mainHeadline: "You're much closer to the grand prize every 24 hours!", howItWorksTitle: "Purpose and Logic of the Game", step1Title: "Create Your Account", step1Desc: "Sign up for free or log in with your Google account.", step2Title: "Try Your Chance", step2Desc: "After logging in, press the daily reward button.", step3Title: "Grab the Prize!", step3Desc: "See your prize instantly and enjoy!", rewardsTitle: "Prizes", grandRewardsTitle: "Grand Prizes", grandRewardsList: `<li>5,000 EURO Cash</li><li>Turkish Airlines $1000 Gift Voucher</li><li>3 Nights 4 Days Santorini Holiday</li><li>3-Day Historical Tour in Athens with Kyrosil</li>`, otherRewardsTitle: "Other Prizes", otherRewardsList: `<li>Trendyol 50€ or 2,000₺ Gift Voucher</li><li>Adidas 100€ or 5,000₺ Gift Voucher</li><li>CarrefourSA 50€ or 2,000₺ Gift Voucher</li><li>50 USDT Cash</li><li>THY One-Way Ticket (Select Routes)</li><li>Burger King & Starbucks Gift Vouchers</li>`, rewardsNote: "Prizes will be updated continuously.", loginTitle: "Log In", emailPlaceholder: "E-mail", passwordPlaceholder: "Password", loginButton: "Log In", noAccount: "Don't have an account?", signUpLink: "Sign Up", signUpTitle: "Sign Up", namePlaceholder: "First Name", surnamePlaceholder: "Last Name", platformLabel: "Followed Social Media:", socialProfilesLabel: "Your Social Media Usernames (Optional)", instagramPlaceholder: "Instagram Username", xPlaceholder: "X (Twitter) Username", tiktokPlaceholder: "TikTok Username", linkedinPlaceholder: "LinkedIn Username", platformPlaceholder: "Please select a platform...", platformUsernamePlaceholder: "Your username on the selected platform", passwordMinChar: "Password (at least 6 characters)", signUpButton: "Sign Up", alreadyAccount: "Already have an account?", loginLink: "Log In", orText: "or", googleLoginButton: "Sign in with Google", verifTitle: "Great!", verifDesc1: "One last step. Please verify your email by clicking the link we sent to ", verifDesc2: ". You can refresh the page after verification.", welcomeMessage: "Welcome", tryChanceButton: "Try My Chance!", logoutButton: "Log Out", spinningButton: "Spinning...", comeBackTomorrow: "See You Tomorrow!", limitUsed: "You have used your daily limit. Please try again tomorrow!", congratsMessage: "Congratulations! Your prize is: ", tryAgainMessage: "Try Again Tomorrow", winnerContactMessage: "<br><small>Our team will contact you via e-mail within 12 hours. You can also write to us at dailywin@kyrosil.eu.</small>", completeProfileTitle: "Complete Your Profile", completeProfileDesc: "Welcome! To continue, please confirm your details and provide your social media information.", saveProfileButton: "Save and Continue", spinsRemaining: "Spins Remaining", nextSpinIn: "Next Spin In", extraSpinsTitle: "Get Extra Spins!", extraSpinsDesc: "Your social media information is saved in your profile. Our team can review it and add extra spins to your account.", taskFollowInstagram: "Follow on Instagram", taskFollowX: "Follow on X", taskVisitWebsite: "Visit our Website", winningsHistoryTitle: "Winnings History", noWinnings: "No prizes won yet.", editProfileButton: "Edit Profile", editProfileTitle: "Edit Your Profile", nameLabel: "First Name:", surnameLabel: "Last Name:", saveChangesButton: "Save Changes", cancelButton: "Cancel", taskEuPortal: "Follow on EU Portal"
    },
    tr: {
        mainHeadline: "Her 24 saatte bir büyük ödüle çok daha yakınsın!", howItWorksTitle: "Oyunun Amacı ve Mantığı", step1Title: "Hesabını Oluştur", step1Desc: "Hemen ücretsiz bir hesap oluştur veya Google ile giriş yap.", step2Title: "Şansını Dene", step2Desc: "Giriş yaptıktan sonra günlük ödül butonuna bas.", step3Title: "Ödülü Kap!", step3Desc: "Kazandığın ödülü anında gör ve keyfini çıkar!", rewardsTitle: "Ödüller", grandRewardsTitle: "Büyük Ödüller", grandRewardsList: `<li>5.000 EURO Nakit</li><li>Türk Hava Yolları 1000$ Hediye Çeki</li><li>3 Gece 4 Gün Santorini Tatili</li><li>Kyrosil ile Atina'da 3 Gün Tarih Gezisi</li>`, otherRewardsTitle: "Diğer Ödüller", otherRewardsList: `<li>Trendyol 50€ veya 2.000₺ Hediye Çeki</li><li>Adidas 100€ veya 5.000₺ Hediye Çeki</li><li>CarrefourSA 50€ veya 2.000₺ Hediye Çeki</li><li>50 USDT Nakit</li><li>THY Tek Yön Bilet (Belirli Hatlar)</li><li>Burger King & Starbucks Hediye Çekleri</li>`, rewardsNote: "Ödüller sürekli güncellenecektir.", loginTitle: "Giriş Yap", emailPlaceholder: "E-posta", passwordPlaceholder: "Şifre", loginButton: "Giriş Yap", noAccount: "Hesabın yok mu?", signUpLink: "Üye Ol", signUpTitle: "Üye Ol", namePlaceholder: "İsim", surnamePlaceholder: "Soyisim", platformLabel: "Takip Edilen Sosyal Medya:", socialProfilesLabel: "Sosyal Medya Hesaplarınız (İsteğe Bağlı)", instagramPlaceholder: "Instagram Kullanıcı Adı", xPlaceholder: "X (Twitter) Kullanıcı Adı", tiktokPlaceholder: "TikTok Kullanıcı Adı", linkedinPlaceholder: "LinkedIn Kullanıcı Adı", platformPlaceholder: "Lütfen bir platform seçin...", platformUsernamePlaceholder: "Seçtiğiniz Platformdaki Kullanıcı Adınız", passwordMinChar: "Şifre (en az 6 karakter)", signUpButton: "Üye Ol", alreadyAccount: "Zaten üye misin?", loginLink: "Giriş Yap", orText: "veya", googleLoginButton: "Google ile Giriş Yap", verifTitle: "Harika!", verifDesc1: "Son bir adım kaldı. Lütfen ", verifDesc2: " adresine gönderdiğimiz linke tıkla. Onayladıktan sonra sayfayı yenileyebilirsin.", welcomeMessage: "Hoş Geldin", tryChanceButton: "Şansımı Dene!", logoutButton: "Çıkış Yap", spinningButton: "Çark Dönüyor...", comeBackTomorrow: "Yarın Tekrar Görüşürüz!", limitUsed: "Bugünlük hakkını kullandın. Lütfen yarın tekrar dene!", congratsMessage: "Tebrikler! Ödülün: ", tryAgainMessage: "Yarın Tekrar Dene", winnerContactMessage: "<br><small>Ekibimiz 12 saat içinde e-posta üzerinden sizinle iletişime geçecektir. Dilerseniz siz de dailywin@kyrosil.eu adresine yazabilirsiniz.</small>", completeProfileTitle: "Profilini Tamamla", completeProfileDesc: "Hoş geldin! Devam etmek için lütfen bilgilerini onayla ve sosyal medya bilgilerini gir.", saveProfileButton: "Kaydet ve Devam Et", spinsRemaining: "Kalan Hak", nextSpinIn: "Sonraki Hak", extraSpinsTitle: "Ekstra Hak Kazan!", extraSpinsDesc: "Sosyal medya bilgileriniz profilinizde kayıtlıdır. Ekibimiz kontrol ederek hesabınıza ekstra haklar ekleyebilir.", taskFollowInstagram: "Instagram'da Takip Et", taskFollowX: "X'te Takip Et", taskVisitWebsite: "Websitemizi Ziyaret Et", winningsHistoryTitle: "Kazanç Geçmişi", noWinnings: "Henüz kazanılmış bir ödül yok.", editProfileButton: "Profilimi Düzenle", editProfileTitle: "Profilini Düzenle", nameLabel: "İsim:", surnameLabel: "Soyisim:", saveChangesButton: "Değişiklikleri Kaydet", cancelButton: "İptal", taskEuPortal: "EU Portal'da Takip Et"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let countdownInterval;

const rewards = [
    { id: 'try-again', name_tr: 'Yarın Tekrar Dene', name_en: 'Try Again Tomorrow', chance: 80, rarity: 'common', imageUrl: 'https://img.icons8.com/ios/100/recurring-appointment.png' }, { id: 'bk-sb', name_tr: 'Burger King & Starbucks Çekleri', name_en: 'Burger King & Starbucks Vouchers', chance: 5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/coffee-to-go.png' }, { id: 'thy-bilet', name_tr: 'THY Tek Yön Bilet', name_en: 'THY One-Way Ticket', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/airport.png' }, { id: 'usdt-50', name_tr: '50 USDT Nakit', name_en: '50 USDT Cash', chance: 2.5, rarity: 'rare', imageUrl: 'https://img.icons8.com/ios/100/us-dollar-circled.png' }, { id: 'carrefour', name_tr: 'CarrefourSA Hediye Çeki', name_en: 'CarrefourSA Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/shopping-cart.png' }, { id: 'adidas', name_tr: 'Adidas Hediye Çeki', name_en: 'Adidas Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/trainers.png' }, { id: 'trendyol', name_tr: 'Trendyol Hediye Çeki', name_en: 'Trendyol Gift Voucher', chance: 2.5, rarity: 'uncommon', imageUrl: 'https://img.icons8.com/ios/100/online-store.png' }, { id: 'atina', name_tr: 'Atina\'da Tarih Gezisi', name_en: 'Historical Tour in Athens', chance: 0.8, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/parthenon.png' }, { id: 'santorini', name_tr: 'Santorini Tatili', name_en: 'Santorini Holiday', chance: 0.7, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/beach.png' }, { id: 'thy-1000', name_tr: 'THY 1000$ Hediye Çeki', name_en: 'THY $1000 Gift Voucher', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/gift-card.png' }, { id: 'nakit-5000', name_tr: '5.000 EURO Nakit', name_en: '5,000 EURO Cash', chance: 0.5, rarity: 'legendary', imageUrl: 'https://img.icons8.com/ios/100/money-bag.png' }
];

document.addEventListener('DOMContentLoaded', () => {

    // --- UI SELECTORS ---
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
    const langEnButton = document.getElementById('lang-en');
    const langTrButton = document.getElementById('lang-tr');
    
    // --- VIEW MANAGER ---
    const showView = (viewName) => {
        mainContainer.classList.add('hidden');
        appContainer.classList.add('hidden');
        onboardingModal.classList.add('hidden');
        editProfileModal.classList.add('hidden');

        if (viewName === 'login') mainContainer.classList.remove('hidden');
        else if (viewName === 'app') appContainer.classList.remove('hidden');
        else if (viewName === 'onboarding') onboardingModal.classList.remove('hidden');
        else if (viewName === 'editProfile') editProfileModal.classList.remove('hidden');
    };
    
    // --- TRANSLATION ---
    const setLanguage = (lang) => {
        currentLang = lang; localStorage.setItem('lang', lang); document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(elem => { if(elem) elem.innerHTML = translations[lang][elem.getAttribute('data-key')] || ''; });
        document.querySelectorAll('[data-placeholder-key]').forEach(elem => { if(elem) elem.placeholder = translations[lang][elem.getAttribute('data-placeholder-key')] || ''; });
        langEnButton.classList.toggle('active', lang === 'en');
        langTrButton.classList.toggle('active', lang === 'tr');
    };

    // --- DASHBOARD UI FUNCTIONS ---
    const updateCountdown = (claimTimestamp) => {
        if (countdownInterval) clearInterval(countdownInterval);
        const countdownEl = document.getElementById('countdown-timer');
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
        mainApp.classList.remove('hidden');
        verificationMessage.classList.add('hidden');

        document.getElementById('user-display-name').textContent = userData.name;
        document.getElementById('spin-count').textContent = userData.dailySpins || 0;
        const claimButton = document.getElementById('claim-button');
        if ((userData.dailySpins || 0) < 1) {
            claimButton.disabled = true;
            claimButton.textContent = translations[currentLang].comeBackTomorrow;
        } else {
            claimButton.disabled = false;
            claimButton.textContent = translations[currentLang].tryChanceButton;
        }
        if (userData.lastClaim) { updateCountdown(userData.lastClaim.toDate().getTime()); }
        else { document.getElementById('countdown-timer').textContent = '00:00:00'; }
        displayWinnings(user.uid);
    };
    
    const renderOnboarding = (userData) => {
        showView('onboarding');
        document.getElementById('onboarding-name').value = userData.name || '';
        document.getElementById('onboarding-surname').value = userData.surname || '';
    };

    const renderVerification = (user) => {
        showView('app'); // Show the main app container
        mainApp.classList.add('hidden'); // Hide the dashboard
        verificationMessage.classList.remove('hidden'); // Show the verification message
        verificationMessage.innerHTML = `<p>${translations[currentLang].verifTitle} ${translations[currentLang].verifDesc1}<strong>${user.email}</strong>${translations[currentLang].verifDesc2}</p>`;
    };
    
    // --- MAIN AUTH ROUTER ---
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const userRef = db.collection('users').doc(user.uid);
            let doc = await userRef.get();
            if (!doc.exists) return; // Should be handled by sign-in logic
            
            let userData = doc.data();
            const now = new Date();
            const lastLogin = userData.lastLogin ? userData.lastLogin.toDate() : new Date(0);
            
            if (now.setHours(0,0,0,0) > lastLogin.setHours(0,0,0,0)) {
                await userRef.update({ dailySpins: 1, lastLogin: now });
                userData = (await userRef.get()).data();
            }
            
            if (!user.emailVerified) {
                renderVerification(user);
            } else if (userData.profileComplete === false) {
                renderOnboarding(userData);
            } else {
                renderDashboard(user, userData);
            }
        } else {
            showView('login');
        }
        setLanguage(currentLang);
    });

    // --- EVENT LISTENERS ---
    langEnButton.addEventListener('click', () => setLanguage('en'));
    langTrButton.addEventListener('click', () => setLanguage('tr'));
    showSignup.addEventListener('click', (e) => { e.preventDefault(); loginForm.classList.add('hidden'); signupForm.classList.remove('hidden'); });
    showLogin.addEventListener('click', (e) => { e.preventDefault(); signupForm.classList.add('hidden'); loginForm.classList.remove('hidden'); });

    onboardingSubmitButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const userRef = db.collection('users').doc(user.uid);
        const name = document.getElementById('onboarding-name').value;
        const surname = document.getElementById('onboarding-surname').value;
        const socialProfiles = {
            instagram: document.getElementById('onboarding-instagram').value,
            x: document.getElementById('onboarding-x').value,
            tiktok: document.getElementById('onboarding-tiktok').value,
            linkedin: document.getElementById('onboarding-linkedin').value
        };
        if (!name || !surname) { return alert("Please fill at least name and surname"); }
        await userRef.update({ name, surname, socialProfiles, profileComplete: true });
        const userData = (await userRef.get()).data();
        renderDashboard(user, userData);
    });
    
    editProfileButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const doc = await db.collection('users').doc(user.uid).get();
        if (!doc.exists) return;
        const userData = doc.data();
        document.getElementById('edit-name').value = userData.name || '';
        document.getElementById('edit-surname').value = userData.surname || '';
        const socialProfiles = userData.socialProfiles || {};
        document.getElementById('edit-instagram').value = socialProfiles.instagram || '';
        document.getElementById('edit-x').value = socialProfiles.x || '';
        document.getElementById('edit-tiktok').value = socialProfiles.tiktok || '';
        document.getElementById('edit-linkedin').value = socialProfiles.linkedin || '';
        showView('editProfile');
    });

    editProfileCancelButton.addEventListener('click', () => showView('app'));

    editProfileSubmitButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user) return;
        const userRef = db.collection('users').doc(user.uid);
        const name = document.getElementById('edit-name').value;
        const surname = document.getElementById('edit-surname').value;
        const socialProfiles = {
            instagram: document.getElementById('edit-instagram').value,
            x: document.getElementById('edit-x').value,
            tiktok: document.getElementById('edit-tiktok').value,
            linkedin: document.getElementById('edit-linkedin').value
        };
        if (!name || !surname) { return alert("Please fill at least name and surname"); }
        await userRef.update({ name, surname, socialProfiles });
        const userData = (await userRef.get()).data();
        renderDashboard(user, userData);
    });

    signupButton.addEventListener('click', () => {
        const name = document.getElementById('signup-name').value, surname = document.getElementById('signup-surname').value, email = document.getElementById('signup-email').value, password = document.getElementById('signup-password').value;
        const socialProfiles = {
            instagram: document.getElementById('signup-instagram').value,
            x: document.getElementById('signup-x').value,
            tiktok: document.getElementById('signup-tiktok').value,
            linkedin: document.getElementById('signup-linkedin').value
        };
        if (!name || !surname || !email || !password) return alert("Please fill required fields.");
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                user.sendEmailVerification();
                return db.collection('users').doc(user.uid).set({ name, surname, email, socialProfiles, createdAt: firebase.firestore.FieldValue.serverTimestamp(), profileComplete: true, dailySpins: 1, lastLogin: new Date() });
            })
            .then(() => alert("Great! Your account has been created. Please check your email to verify your account."))
            .catch(error => alert("Error: " + error.message));
    });

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('login-email').value, password = document.getElementById('login-password').value;
        if (!email || !password) return alert("Please enter email and password.");
        auth.signInWithEmailAndPassword(email, password).catch(error => alert("Error: ".concat(error.message)));
    });

    googleLoginButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(async (result) => {
                const user = result.user, userRef = db.collection('users').doc(user.uid);
                const doc = await userRef.get();
                if (!doc.exists) {
                    const newUserData = {
                        name: user.displayName.split(' ')[0], surname: user.displayName.split(' ').slice(1).join(' '), email: user.email, createdAt: firebase.firestore.FieldValue.serverTimestamp(), profileComplete: false, dailySpins: 1, lastLogin: new Date(), socialProfiles: {}
                    };
                    await userRef.set(newUserData);
                    renderOnboarding(newUserData);
                    setLanguage(currentLang);
                }
            })
            .catch(error => console.error("Google sign-in error", error));
    });

    logoutButton.addEventListener('click', () => auth.signOut());

    claimButton.addEventListener('click', async () => {
        const user = auth.currentUser; if (!user || !user.emailVerified) return;
        
        claimButton.disabled = true; claimButton.textContent = translations[currentLang].spinningButton;
        document.getElementById('message-area').innerHTML = '';
        
        const weightedPool = [];
        rewards.forEach(reward => { const weight = reward.chance * 10; for (let i = 0; i < weight; i++) weightedPool.push(reward); });
        const winner = weightedPool[Math.floor(Math.random() * weightedPool.length)];
        const reel = document.querySelector('.spinner-reel');
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

        setTimeout(async () => {
            const winnerName = winner[`name_${currentLang}`];
            let message = '';
            const userRef = db.collection('users').doc(user.uid);

            await db.collection('users').doc(user.uid).collection('winnings').add({
                rewardName: winner.name_en, 
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            displayWinnings(user.uid);

            if(winner.id === 'try-again') {
                message = winnerName; document.getElementById('message-area').style.backgroundColor = '#ffc700';
            } else {
                message = `${translations[currentLang].congratsMessage}${winnerName}${translations[currentLang].winnerContactMessage}`;
                document.getElementById('message-area').style.backgroundColor = winner.rarity === 'legendary' ? 'var(--legendary-color)' : 'var(--rare-color)';
            }
            document.getElementById('message-area').innerHTML = message;
            
            const now = new Date();
            const doc = await userRef.get();
            const currentSpins = doc.data().dailySpins || 0;
            await userRef.update({
                dailySpins: firebase.firestore.FieldValue.increment(-1),
                lastClaim: now
            });
            document.getElementById('spin-count').textContent = currentSpins - 1;

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
