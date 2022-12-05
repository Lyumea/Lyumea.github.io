const portfolio2d = [
    {   
        id : 1,
        nom : "Logos",
        class : "p-logo",
        liens : [  
        {
            id : 1,
            miniature : "p-logo-nai",
            src : require("../assets/portfolio/2d/logo/nai-logo.webp"),
            title: "NAI",
            description : "logo de mon portfolio"
        },
        {
            id : 2,
            miniature : "p-logo-mll",
            src :  require("../assets/portfolio/2d/logo/mylittlelitterature.webp"),
            title: "MyLittleLitterature",
            description : "Logo du prototype MyLittleLitterature"
        },
        {
            id : 3,
            miniature : "p-logo-veezio",
            src :  require("../assets/portfolio/2d/logo/logoveezio.webp"),
            title: "SVP-Visio",
            description : "Proposition de logo SVP-visio"
        },
        {
            id : 4,
            miniature : `p-logo-coliskom`,
            src :  require("../assets/portfolio/2d/logo/coliskom-propslogo.webp"),
            title: "ColisKom",
            description : "Proposition de logo de ColisKom"
        },
        {
            id : 5,
            miniature : `p-logo-era`,
            src :  require("../assets/portfolio/2d/logo/proposition-era-refuse.webp"),
            title: "En Recherche Active",
            description : "Proposition de logo en-recherche-active"
        },
        {
            id : 6,
            miniature : `p-logo-aud`,
            src :  require("../assets/portfolio/2d/logo/adopte-un-dechet-logo.webp"),
            title: "Adopte Un déchet",
            description : "Logo du projet Adopte un déchet"
        },
        {
            id : 7,
            miniature : `p-logo-vas`,
            src :  require("../assets/portfolio/2d/logo/logoVAS.webp"),
            title: "VAS",
            description : "Logo du projet vidéo VAS"
        },
        {
            id : 8,
            miniature : `p-logo-so`,
            src :  require("../assets/portfolio/2d/logo/logo-apsem-refuse.webp"),
            title: "APSEM",
            description : "Logo de l'association rejeté"
        }
    ]},

    {   
        id : 2,
        nom : "Illustrations",
        class : "p-illu",
        liens : [
        {
            id : 1,
            miniature : "illu-idvisuel",
            src : require("../assets/portfolio/2d/illus/idvisuel.webp"),
            title: "Idées Visuel",
            description : "Idées visuels liées à ma charte graphique"
        },
        {
            id : 2,
            miniature : `illu-batkachu`,
            src : require("../assets/portfolio/2d/illus/batkachu.webp"),
            title: "Anime",
            description : "Illustration vectorielle"
        },
        {
            id : 3,
            miniature : "illu-test",
            src : require("../assets/portfolio/2d/illus/default.webp"),
            title: "Autoportrait",
            description : "Autoportrait de NAI"
        },
        {
            id : 4,
            miniature : `illu-gif`,
            src : require("../assets/portfolio/2d/illus/Musamune_Date.gif"),
            title: "PixelArt 1",
            description : "Plusieurs concepts en pixelArt"
        }
    ]}
];

export default portfolio2d;