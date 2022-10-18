 const catetories = [
    {
        id : "01",
        text : "2D",
        desc : "Logos, illustrations vectorielles ou bitmap",
        src : "https://cdn.discordapp.com/attachments/966254135601160212/986613537130553384/idvisuel2.png",
        logo : "",
        tech : [
            '<li> <img src="assets/svg/icons/adobe-illustrator.svg" alt="Icone du logiciel Adobe : Illustrator" /> </li>',
            '<li> <img src="assets/svg/icons/adobe-photoshop.svg" alt="Icone du logiciel Adobe : Photoshop" /> </li>'
        ],
    },

    {
        id : "02",
        text : "3D",
        desc : "illustrations 3D",
        src : "",
        logo : "",
        tech : ["Blender, Spline"]
    },

    {
        id : "03",
        text : "Print",
        desc : "Mon portfolio print, affiches et flyers",
        src : require("../assets/img/bg/book/nai-portfolio.jpg"),
        logo : "",
        tech : ["Indesign"]
    },

    {
        id : "04",
        text : "Vidéos",
        desc : "Animation et montage vidéo",
        src : require("../assets/gif/8.gif"),
        logo : "",
        tech: [
            '<li> <img src="assets/svg/icons/adobe-premiere-pro.svg" alt="Icone du logiciel Adobe : Premiere Pro" /> </li>',
            '<li> <img src="assets/svg/icons/adobe-after-effects.svg" alt="Icone du logiciel Adobe : After Effecs" /> </li>'
        ]
    }
]

export default catetories;