import bcrypt from 'bcryptjs';

const DataProduct = {

   users :[
        { 
        name: 'Amal',
        email: 'admin@example.com',
        password : bcrypt.hashSync('1234', 8),
        isAdmin: true,
        },

        { 
            name: 'Dhekra',
            email: 'user@example.com',
            password : bcrypt.hashSync('1234', 8),
            isAdmin: false,
    
        },

    ], 

    products :[
        {
            
            name: 'Bassisa fruits secs',
            category: 'Bsissa',
            image: '/Image/terroir1.jpg',
            price: '13.400',
            countInStock: 6,
            rating: 4.5,
            numReviews: 15,
            description: 'Coup faim idéal pour un Healthy Life style Blé, fèves, pois chiches, graines de chia, noisettes, amandes et noix de cajou. - Sans sucre ajouté - 100% Naturel - Riche en fer - Riche en calcium - Vegan - Sans additif',
            poids:'400g',
        },

        {
            
            name: 'Mix de céréales',
            category: 'Bsissa',
            image: '/Image/terroir2.jpg',
            price: '35.000',
            countInStock: 12,
            rating: 6,
            numReviews: 10,
            description: 'Des mix de céréales nourissants,énérgitiques et healthy s’ajoutent à notre gamme Gourmet',
            poids:'400g',

        },

        {
            
            name: 'Bassisa Sorgho',
            category: 'Bsissa',
            image: '/Image/terroir3.jpg',
            price: '6.200',
            countInStock: 10,
            rating: 5,
            numReviews: 6,
            description: 'Coup faim idéal pour un Healthy Life style Blé, fèves, pois chiches.- Sans sucre ajouté - 100% Naturel - Riche en fer - Riche en calcium - Vegan - Sans additif',
            poids:'400g',

        },

        {
            
            name: 'Cumun',
            category: 'Epice',
            image: '/Image/terroir5.jpg',
            price: '4.300',
            countInStock: 5,
            rating: 4.5,
            numReviews: 3,
            description: 'Produit de très bonne qualité',
            poids:'100g',

        },

        {
            
            name: "lot d'épice" ,
            category: 'Epice',
            image: '/Image/terroir6.jpg',
            price: '20.000',
            countInStock: 15,
            rating: 3.5,
            numReviews: 5,
            description: 'Produit de très bonne qualité',
            poids:'1000g',

        },

        {
           
            name: 'Curcumin',
            category: 'Epice',
            image: '/Image/terroir7.jpg',
            price: '5.000',
            countInStock: 7,
            rating: 4.5,
            numReviews: 12,
            description: 'Produit de très bonne qualité',
            poids:'200g',

        },

        {
           
            name: 'Hrissa bio',
            category: 'Harissa',
            image: '/Image/terroir8.jpg',
            price: '6.200',
            countInStock: 0,
            rating: 2.5,
            numReviews: 7,
            description: 'Produit de très bonne qualité',
            poids:'300g',

        },

        {
            
            name: "Harissa à l'ail",
            category: 'Harissa',
            image: '/Image/terroir9.jpg',
            price: '50.000',
            countInStock: 13,
            rating: 4.8,
            numReviews: 10,
            description: 'Produit de très bonne qualité',
            poids:'1000g',

        },

        {
           
            name: "Au gout d'oignon",
            category: 'Harissa',
            image: '/Image/terroir10.jpg',
            price: '4.600',
            countInStock: 0,
            rating: 5,
            numReviews: 5,
            description: 'Produit de très bonne qualité',
            poids:'250g',

        },

        {
          
            name: "Huile Thym",
            category: 'Huile essentiel',
            image: '/Image/terroir11.jpg',
            price: '15.000',
            countInStock: 2,
            rating: 5,
            numReviews: 8,
            description: 'Produit de très bonne qualité',
            poids:'20ml',
        },

        {
           
            name: "Huile Lavande",
            category: 'Huile essentiel',
            image: '/Image/terroir12.jpg',
            price: '45.000',
            countInStock: 2,
            rating: 5,
            numReviews: 5,
            description: 'Produit de très bonne qualité',
            poids:'100ml',

        },

        {
            
            name: "Huile Jasmin",
            category: 'Huile essentiel',
            image: '/Image/terroir13.jpg',
            price: '18.500',
            countInStock: 2,
            rating: 5,
            numReviews: 5,
            description: 'Produit de très bonne qualité',
            poids:'30ml',

        },
],



/*************************data artisanal product**************************/

artisanal :[
    {
        
        name: 'Assiette en poterie',
        category: 'Décoration cuisine',
        image: '/Image/artisan1.jpg',
        price: '5.400',
        countInStock: 8,
        rating: 3.5,
        numReviews: 10,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',
    },

    {
       
        name: 'Piéce en poterie',
        category: 'Décoration cuisine',
        image: '/Image/artisan2.jpg',
        price: '45.000',
        countInStock: 5,
        rating: 5,
        numReviews: 12,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',

    },

    {
       
        name: 'Pack en poterie',
        category: 'Décoration cuisine',
        image: '/Image/artisan3.jpeg',
        price: '70.000',
        countInStock: 10,
        rating: 4.5,
        numReviews: 6,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',

    },

    {
       
        name: 'Margoum traditionel',
        category: 'Margoum tunisien',
        image: '/Image/artisan4.jpg',
        price: '55.000',
        countInStock: 7,
        rating: 4.5,
        numReviews: 6,
        description: 'Produit fait à la main avec piéce unique',
        poids:'100g',

    },

    {
        
        name: "Margoum à la mode" ,
        category: 'Margoum tunisien',
        image: '/Image/artisan5.jpeg',
        price: '40.000',
        countInStock: 15,
        rating: 3.5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'1000g',

    },

    {
        
        name: 'Collection margoum',
        category: 'Margoum tunisien',
        image: '/Image/img4.jpg',
        price: '100.000',
        countInStock: 4,
        rating: 5,
        numReviews: 12,
        description: 'Produit fait à la main avec piéce unique',
        poids:'200g',

    },

    {
        
        name: 'Pochet artisanale',
        category: 'Pochet artisanale',
        image: '/Image/artisan7.jpeg',
        price: '12.800',
        countInStock: 0,
        rating: 2.5,
        numReviews: 7,
        description: 'Produit fait à la main avec piéce unique',
        poids:'300g',

    },

    {
       
        name: "chaussure artisanale",
        category: 'chaussure artisanale',
        image: '/Image/artisan8.jpeg',
        price: '25.000',
        countInStock: 13,
        rating: 4.8,
        numReviews: 10,
        description: 'Produit fait à la main avec piéce unique',
        poids:'1000g',

    },

    {
        
        name: "Couffin Tunisienne",
        category: 'Meuble traditionel',
        image: '/Image/artisan9.jpg',
        price: '14.600',
        countInStock: 0,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    {
       
        name: "Chaise traditionnel",
        category: 'Meuble traditionel',
        image: '/Image/artisan10.jpg',
        price: '70.000',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    {
        
        name: "Salon El Margoum",
        category: 'Meuble traditionel',
        image: '/Image/artisan11.jpg',
        price: '900.000',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    {
        
        name: "Chaise Margoum",
        category: 'Meuble traditionel',
        image: '/Image/artisan12.jpg',
        price: '14.600',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    
],

/*************data accessory product****************************/

Accessory :[
    {
       
        name: 'Colier & Bracelet',
        category: 'Colier',
        image: '/Image/accessoire1.jpg',
        price: '8.000',
        countInStock: 6,
        rating: 4.5,
        numReviews: 15,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',
    },

    {
        
        name: 'Colier & Bague',
        category: 'Colier',
        image: '/Image/accessoire2.jpg',
        price: '20.000',
        countInStock: 12,
        rating: 6,
        numReviews: 10,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',

    },

    {
       
        name: 'Colier Moderne',
        category: 'Colier',
        image: '/Image/accessoire3.jpg',
        price: '18.500',
        countInStock: 0,
        rating: 5,
        numReviews: 6,
        description: 'Produit fait à la main avec piéce unique',
        poids:'400g',

    },

    {
       
        name: 'Boucle',
        category: 'Boucle',
        image: '/Image/accessoire4.jpg',
        price: '5.300',
        countInStock: 5,
        rating: 4.5,
        numReviews: 3,
        description: 'Produit fait à la main avec piéce unique',
        poids:'100g',

    },

    {
        
        name: "Boucle unique" ,
        category: 'Boucle',
        image: '/Image/accessoire5.jpg',
        price: '11.000',
        countInStock: 15,
        rating: 3.5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'1000g',

    },

    {
        
        name: 'Boucle vert',
        category: 'Boucle',
        image: '/Image/accessoire6.jpg',
        price: '7.800',
        countInStock: 7,
        rating: 4.5,
        numReviews: 12,
        description: 'Produit fait à la main avec piéce unique',
        poids:'200g',

    },

    {
        
        name: 'Bracelet',
        category: 'Bracelet',
        image: '/Image/accessoire7.jpg',
        price: '6.200',
        countInStock: 0,
        rating: 2.5,
        numReviews: 7,
        description: 'Produit fait à la main avec piéce unique',
        poids:'300g',

    },

    {
       
        name: "Bracelet spécifique",
        category: 'Bracelet',
        image: '/Image/accessoire8.jpg',
        price: '10.000',
        countInStock: 13,
        rating: 4.8,
        numReviews: 10,
        description: 'Produit fait à la main avec piéce unique',
        poids:'1000g',

    },

    {
        
        name: "Bracelet",
        category: 'Bracelet',
        image: '/Image/accessoire9.jpg',
        price: '4.600',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },
    
    {
        
        name: "Bague",
        category: 'Bague',
        image: '/Image/accessoire10.jpg',
        price: '7.000',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    {
        
        name: "Bague spéciale",
        category: 'Bague',
        image: '/Image/accessoire11.jpg',
        price: '4.600',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },

    {
       
        name: "Bague moderne",
        category: 'Bague',
        image: '/Image/accessoire12.jpg',
        price: '6.000',
        countInStock: 2,
        rating: 5,
        numReviews: 5,
        description: 'Produit fait à la main avec piéce unique',
        poids:'250g',

    },
    
],


};









export default DataProduct