export interface Ingredient {
    icon: string;
    label: string;
    text: string;
    imgwidth: string;
    imgheight: string;
    iconwidth: string;
    iconheight: string;
  }
  
  export const allIngredients = [
    { 
      icon: "src/assets/ReactIcon.png", 
      label: "React", 
      text: "I use React", 
      imgwidth: "150px", 
      imgheight: "125px",
      iconwidth: "42px", 
      iconheight: "35px" 
    },

    { 
      icon: "src/assets/c++.png", 
      label: "C++", 
      text: "I use C++", 
      imgwidth: "115px", 
      imgheight: "125px",
      iconwidth: "30px", 
      iconheight: "35px" 
    },

    { 
      icon: "src/assets/js.png", 
      label: "JS", 
      text: "I use JavaScript", 
      imgwidth: "115px", 
      imgheight: "115px",
      iconwidth: "30px", 
      iconheight: "30px" 
    },

    { 
      icon: "src/assets/htmlcss.png", 
      label: "HTML", 
      text: "I use HTML and CSS", 
      imgwidth: "200px", 
      imgheight: "215px",
      iconwidth: "45px", 
      iconheight: "50px" 
    },
  ];
  
  const [tomato, lettuce, cheese, test] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese, test];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }