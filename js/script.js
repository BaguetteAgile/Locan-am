

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1096},"pages":[{"id":"page-home","displayName":"home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-politiquedecookies","displayName":"politiquedecookies","link":{"linkType":"LinkTypePage","href":"#!page-politiquedecookies"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-cgu","displayName":"CGU","link":{"linkType":"LinkTypePage","href":"#!page-cgu"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
/*------------------ OREJIME - GPDR ------------------------------------------*/
  /* variable consent */
window.orejimeConfig = {
    appElement: "#site-header",
    privacyPolicy: "https://locan-am.netlify.app/politiquedecookies.html/",
    mustConsent: true,
    implicitConsent: false,
    lang: "fr",
    translations: {
        fr: {
            consentModal: {
                title:"Locan-am respecte vos données personnelles.",
            },
            
            purposes: {
                essentiel: "Utile au bon fonctionnement de la sécurité Google ainsi que les documents PDF"
            },
            save: "Accepter"
        },
    },
    apps: [
        {
        name: "google",
        title: "Google Doc et secure",
        purposes: ["essentiel"],
        cookies: ["__Secure-3PAPISID", "__Secure-3PSID", "__Secure-3PSIDCC", "SEARCH_SAMESITE" ]
    },
        
    ],
}


            
/* End variable consent */
