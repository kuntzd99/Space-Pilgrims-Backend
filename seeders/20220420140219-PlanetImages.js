'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'planetimages',
      [
        {
          image:
            'https://img.republicworld.com/republic-prod/stories/images/16004919755f6591c72af67.jpg',
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://cdn.vox-cdn.com/thumbor/glLMcTp9IFG3Qc26fX4vSGHHF5E=/0x54:800x654/1400x1050/filters:focal(0x54:800x654):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49511269/NorthernVolcanicPlains_PDS15-sm.0.png',
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: 'https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg',
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: 'https://scx1.b-cdn.net/csz/news/800a/2014/mercury.jpg',
          planetId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/venus-surface-venera-13-b.jpg?mtime=1606496296',
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://astronomy.com/-/media/Images/News%20and%20Observing/News/2021/06/file2021061927tggglg.png',
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://media.wired.com/photos/5dae3d8e182de80009f7fdb6/1:1/w_1599,h_1599,c_limit/science_nasa_Venus!.jpg',
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2005/08/radar_image_of_surface_of_venus/10175413-2-eng-GB/Radar_image_of_surface_of_Venus_pillars.jpg',
          planetId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://cdn.mos.cms.futurecdn.net/3upZx2gxxLpW7MBbnKYQLH-1200-80.jpg',
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__480.jpg',
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxOTg3MDcxMjUzMDk2MzMw/earth-from-space-nasa.jpg',
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: 'https://cdn.mos.cms.futurecdn.net/mYgGsgUeqbMMYbZbTK7uP6.jpg',
          planetId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/2808/production/_118684201_mars_perseverance_zl0_0036_0670134061_053eby_n0031392zcam03107_1100luj.jpg',
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://cdn.cnn.com/cnnnext/dam/assets/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced-super-tease.jpg',
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: 'https://cdn.mos.cms.futurecdn.net/XNRcoHujh5mZHmPQZzYbgH.jpg',
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.popsci.com/uploads/2022/03/08/mars-flower-curiosity-rover-imahe.jpg?auto=webp&width=1440&height=1076.5406790519',
          planetId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://cdn.vox-cdn.com/thumbor/J85lBLditBHKUEguiZh8rPEmWqg=/0x0:3805x1288/1200x675/filters:focal(1599x340:2207x948)/cdn.vox-cdn.com/uploads/chorus_image/image/59799667/pia21974.0.jpg',
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.sciencealert.com/images/2021-10/processed/JupitersRedSpotCloseUp_1024.jpeg',
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/1024x512/landscape-1489610227-jupiterjerk-1.jpg?resize=640:*',
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://images.theconversation.com/files/178084/original/file-20170713-18558-czohx6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
          planetId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.universetoday.com/wp-content/uploads/2008/05/cassinirings-1280x720.jpg',
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Saturn_with_auroras.jpg/800px-Saturn_with_auroras.jpg',
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'http://3.bp.blogspot.com/_qcuftpB9Hx8/TJe1DfesA0I/AAAAAAAAC0w/004SA5VkKO8/s1600/saturn_npole.jpg',
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://solarsystem.nasa.gov/system/resources/detail_files/17545_PIA20502_full.jpg',
          planetId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://solarsystem.nasa.gov/system/stellar_items/image_files/69_feature_1600x900_uranus_new.jpg',
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://static.independent.co.uk/2020/12/23/11/uranus.png?quality=75&width=982&height=726&auto=webp',
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://media.istockphoto.com/photos/beautiful-view-of-planet-uranus-from-space-timelapse-and-stars-picture-id1187258342?k=20&m=1187258342&s=170667a&w=0&h=ivgNCqSPadAo7HudXH-f6r9ksar1czWHMGK5i73Q4t8=',
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://nineplanets.org/wp-content/uploads/2019/11/Umbriel_usgsx2.jpg',
          planetId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://imageio.forbes.com/specials-images/imageserve/648792456/Neptune/960x0.jpg?fit=bounds&format=jpg&width=960',
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL05lcHR1bmUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=',
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://www.universetoday.com/wp-content/uploads/2011/07/neptune.jpg',
          planetId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://news.yale.edu/sites/default/files/styles/featured_media/public/planet-9-184446434.jpg?itok=rTHZHU-I&c=07307e7d6a991172b9f808eb83b18804',
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/14369/production/_89139728_thinkstockphotos-494508653.jpg',
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image: 'https://earthsky.org/upl/2017/02/planet9-nasa750.jpg',
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          image:
            'https://astronomy.com/-/media/Images/News%20and%20Observing/News/2019/03/planet9.jpg?mw=600',
          planetId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
