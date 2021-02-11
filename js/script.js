

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1400},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-politiquedecookies","displayName":"politiquedecookies","link":{"linkType":"LinkTypePage","href":"#!page-politiquedecookies"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-cgu","displayName":"CGU","link":{"linkType":"LinkTypePage","href":"#!page-cgu"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/*------------------ OREJIME - GPDR ------------------------------------------*/
  /* variable consent */
window.orejimeConfig = {
    appElement: "#site-header",
    privacyPolicy: "/politique-de-confidentialite/",
    mustConsent: true,
    implicitConsent: false,
    lang: "fr",
    translations: {
        fr: {
            consentModal: {
                title:"Locan-am respecte vos données personnelles.",
            },
            "google-analytics": {
                description: "Analyse d'audience",
            },
            purposes: {
                experience: "Les cookies de préférences permettent à un site Web de retenir des informations qui modifient la manière dont le site se comporte ou s’affiche, comme votre langue préférée ou la région dans laquelle vous vous situez.",
                statistic: "Les cookies statistiques aident les propriétaires du site Web, par la collecte et la communication d'informations de manière anonyme, à comprendre comment les visiteurs interagissent avec le site Web.",
                essentiel: "Utile au bon fonctionnement des vidéos de Calice"
            },
            save: "Accepter"
        },
    },
    apps: [
        {
        name: "google-analytics",
        title: "Google Analytics",
        purposes: ["statistic"],
        cookies: ["_ga", "_gat", "_gid", "__utma", "__utmb", "__utmc", "__utmt", "__utmz"]
    },
    {
         name: "facebook",
        title: "Facebook",
        purposes: ["statistic"],
        cookie: ["_sb", "_fr", "_datr"]
    },
    {
         name: "videas",
        title: "Videas",
        purposes: ["essentiel"],
        cookie: []
    },

    
    ],
}
document.querySelector('.consent-modal-button').addEventListener('click', function() 
   { orejime.show();
}, false);

            
/* End variable consent */
