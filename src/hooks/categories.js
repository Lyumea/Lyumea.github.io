 const catetories = [
    {
        id : "01",
        text : "Graphisme",
        desc : "Logos, illustrations vectorielles ou bitmap",
        src : require("../assets/portfolio/2d/illus/idvisuel.webp"),
        tech : [
            '<li> <img src="assets/svg/icons/adobe-illustrator.svg" alt="Icone du logiciel Adobe : Illustrator" /> </li>',
            '<li> <img src="assets/svg/icons/adobe-photoshop.svg" alt="Icone du logiciel Adobe : Photoshop" /> </li>'
        ],
        path: "/portfolio/graphisme"
    },

    {
        id : "02",
        text : "UI 3D",
        desc : "Prototypes 3D",
        src : require("../assets/projets-web/so-fond.webp"),
        tech : ["Blender, Spline"],
        path: "/portfolio/ui"
    },

    {
        id : "03",
        text : "Print",
        desc : "Mon portfolio print, affiches et flyers",
        src : require("../assets/img/bg/book/nai-portfolio.jpg"),
        tech : ["Indesign, Illustrator"],
        path: "/portfolio/print"
    },

    {
        id : "04",
        text : "Vidéos",
        desc : "Animation et montage vidéo",
        src : require("../assets/gif/8.gif"),
        tech: [
            '<li> <img src="assets/svg/icons/adobe-premiere-pro.svg" alt="Icone du logiciel Adobe : Premiere Pro" /> </li>',
            '<li> <img src="assets/svg/icons/adobe-after-effects.svg" alt="Icone du logiciel Adobe : After Effecs" /> </li>'
        ],
        path: "/portfolio/video"
    }
]

export default catetories;