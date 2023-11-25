const socialMediaList = [
    { name: 'Facebook', icon: '../assets/img/Facebook.png' },
    { name: 'Shopee', icon: '../assets/img/shopee.png' },
    { name: 'Tiktok', icon: '../assets/img/tiktok.png' },
    { name: 'Twitter', icon: '../assets/img/twitter.png' },
    { name: 'Telegram', icon: '../assets/img/telegram.png' },
    { name: 'Google', icon: '../assets/img/google.png' },
    { name: 'Instagram', icon: '../assets/img/instagram.png' },
    { name: 'Youtube', icon: '../assets/img/icon-youtube.png' },
];

function generateSocialMediaItems() {
    const socialMediaContainer = document.getElementById('socialMediaList');

    socialMediaList.forEach(media => {
        const socialMediaLink = document.createElement('a');
        socialMediaLink.href = '#';
        socialMediaLink.className = 'all-center flex-col icon-social rounded-lg py-4 px-6';

        const socialMediaIcon = document.createElement('img');
        socialMediaIcon.src = media.icon;
        socialMediaIcon.alt = media.name;
        socialMediaIcon.width = '60';
        socialMediaIcon.height = '60';
        socialMediaIcon.className = 'scale-icon';

        const socialMediaName = document.createElement('p');
        socialMediaName.className = 'font-bold mt-1';
        socialMediaName.textContent = media.name;

        socialMediaLink.appendChild(socialMediaIcon);
        socialMediaLink.appendChild(socialMediaName);

        socialMediaContainer.appendChild(socialMediaLink);
    });
}

generateSocialMediaItems();

function generateServiceItems() {
    const serviceContainer = document.getElementById('serviceList');

    const services = [
        { name: 'Facebook', icon: '../assets/img/icon-facebook.png', progress: 90, color: 'facebook' },
        { name: 'Shopee', icon: '../assets/img/icon-shopee.png', progress: 20, color: 'shopee' },
        { name: 'Instagram', icon: '../assets/img/icon-instagram.png', progress: 33, color: 'instagram' },
        { name: 'Google', icon: '../assets/img/google.png', progress: 47, color: 'google' },
    ];

    services.forEach(service => {
        const serviceItem = document.createElement('li');
        serviceItem.className = 'flex justify-between items-center py-3';

        const serviceInfo = document.createElement('div');
        serviceInfo.className = 'flex gap-3 items-center';

        const serviceIcon = document.createElement('img');
        serviceIcon.src = service.icon;
        serviceIcon.alt = service.name;
        serviceIcon.width = '42';
        serviceIcon.height = '42';

        const serviceName = document.createElement('p');
        serviceName.className = 'font-semibold';
        serviceName.textContent = service.name;

        serviceInfo.appendChild(serviceIcon);
        serviceInfo.appendChild(serviceName);

        const serviceProgress = document.createElement('div');
        serviceProgress.className = 'flex gap-3 items-center';

        const progressBar = document.createElement('div');
        progressBar.className = `progress sm:w-[176px] w-24 !h-2`;

        const progressBara = document.createElement('div');
        progressBara.className = `progress-bar ${service.color.toLowerCase()}`;


        const percentage = document.createElement('p');
        percentage.className = 'font-bold';
        percentage.textContent = `${service.progress}%`;

        serviceProgress.appendChild(progressBar);
        progressBar.appendChild(progressBara);
        serviceProgress.appendChild(percentage);

        serviceItem.appendChild(serviceInfo);
        serviceItem.appendChild(serviceProgress);

        serviceContainer.appendChild(serviceItem);
    });
}

generateServiceItems();
