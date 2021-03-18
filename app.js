import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
} from "react-native";


//  You need to install these two module for navigation
//  Run the following commands using your terminal:
/*
	$npm install @react-navigation/native
	$expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	$npm install @react-navigation/stack
*/

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

/*Dummy Data for Menus*/
const Menus = [
  {
    url: "https://th.bing.com/th/id/R91d66629662742fd72ccb3f534276fa7?rik=H5uyYuayaI932Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YY7tXZSfwOo%2fTiPxpYze4mI%2fAAAAAAAAALk%2fuVNtnBJawhc%2fw1200-h630-p-k-nu%2fdinuguan%2brecipe.jpg&ehk=P6iAVmw126scjZIc%2fiGt4FTucN0V64ojASSyUi4eW0Y%3d&risl=&pid=ImgRaw",
    menuTitle: "Pork Dinuguan",
    menuDesc: "Ingredients",
    menuRecipe: "2 Tbsp. cooking oil",
    menuRecipe1: "2 cloves garlic chopped",
    menuRecipe2: "2 cups pork liver sliced into cubes",
    menuRecipe3: "1/2 cup vinegar",
    menuRecipe4: "2 Tbsp. patis",
    menuRecipe5: "1 Tbsp. salt",
    menuRecipe6: "1/4 Tbsp. MSG",
    menuRecipe7: "1-1/2 cup pork meat stock",
    menuRecipe8: "1 cup pig's blood",
    menuRecipe9: "2 tsp. sugar",
    menuRecipe10: "3 pcs. green chili peppers",
    menuRecipe11: "1/4 tsp. oregano",
    menuRecipe12: "Instruction",
    menuRecipe13: "How to cook dinuguan",
    menuRecipe14: "Cook the pork in approximately 3 cups of water for 30 minutes.",
    menuRecipe15: "Let it cool then slice the pork into cubes. Set aside the meat stock.",
    menuRecipe16: "In a wok or kawali, sauté the garlic and onion in oil for 5 minutes.",
    menuRecipe17: "Then add the pork, liver, patis, MSG and salt.",
    menuRecipe18: "Then pour in the vinegar and boil without stirring.",
    menuRecipe19: "Afterwards pour in the meat stock and simmer for 10 minutes.",
    menuRecipe20: "Add the pig's blood and sugar and stir occasionally until the mixture thickens.",
    menuRecipe21: "Put the oregano and green chili then let it simmer again for 5 minutes.",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",

  },
  {
    url: "https://cdn.nutrition.ph/wp-content/uploads/2019/06/bicol-express.jpg",
    menuTitle: "Bicol Express",
    menuDesc: "Ingredients",
    menuRecipe: "1/4 kilo pork, thinly sliced",
    menuRecipe1: "8 pcs birds eye chili or jalapeno peppers",
    menuRecipe2: "1 onion, minced",
    menuRecipe3: "1 head of garlic, minced",
    menuRecipe4: "1 cup coconut milk",
    menuRecipe5: "1 cup coconut cream",
    menuRecipe6: "2 tablespoons of cooking oil",
    menuRecipe7: "Salt to taste",
    menuRecipe8: "",
    menuRecipe9: "",
    menuRecipe10: "",
    menuRecipe11: "",
    menuRecipe12: "How To Cook",
    menuRecipe13: "In a bowl of water with salt, soak chili peppers for 30 minutes then rinse and strain.",
    menuRecipe14: "In a cooking pan, heat cooking oil and brown sliced pork for a few minutes.",
    menuRecipe15: "In another pan, saute minced garlic and onion.",
    menuRecipe16: "Add to the saute the browned pork.",
    menuRecipe17: "Then add the coconut milk, bring to a boil and simmer for 10 minutes.",
    menuRecipe18: "Add the chili peppers and cook until dish gets a little dry.",
    menuRecipe19: "Add the coconut cream and simmer until the sauce thickens.",
    menuRecipe20: "Salt to taste.",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },
  {
    url: "https://www.pinoyrecipe.net/wp-content/uploads/2008/01/pork-sisig.jpg",
    menuTitle: "Pork Sisig",
    menuDesc: "Ingredients",
    menuRecipe: "1-1/2 lbs pork cheeks (or 2 lbs deboned pork hocks)",
    menuRecipe1: "1/2 lb beef or pork tongue",
    menuRecipe2: "1/2 lb beef or pork heart",
    menuRecipe3: "1/2 lb liver (pork, beef or chicken)",
    menuRecipe4: "2 cups water (for boiling)",
    menuRecipe5: "1 cup pineapple juice (for boiling)",
    menuRecipe6: "1 tsp whole black peppers (for boiling)",
    menuRecipe7: "",
    menuRecipe8: "",
    menuRecipe9: "",
    menuRecipe10: "",
    menuRecipe11: "",
    menuRecipe12: "Instruction",
    menuRecipe13: "How to cook",
    menuRecipe14: "Combine pork cheeks (or deboned pork hocks), heart, and tongue in pineapple juice, salt, water and crushed whole black pepper and bring to a boil; simmer for about 1 hour or until tender.",
    menuRecipe15: "Drain and cool to room temperature.",
    menuRecipe16: "Slice pork cheeks/hocks, liver, heart and tongue, into 2″ X 3″ X 1/4 thick pieces.",
    menuRecipe17: "Place in bamboo skewers and grill over charcoal briquettes until pork rind is crisp and browned.",
    menuRecipe18: "Chop the grilled pork cheeks/hocks, liver, heart, and tongue into 1/4 inch sized cubes;",
    menuRecipe19: "Mix the chopped meat with the marinade seasoning mix of garlic, ginger, onions, vinegar, calamansi juice, hot peppers (siling labuyo), bay leaf, salt and pepper;",
    menuRecipe20: "Keep the marinated mixture in the refrigerator for 2-3 hours before serving.",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },

  {
    url: "https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-na-baboy-1.jpg",
    menuTitle: "Sinigang na Baboy",
    menuDesc: "Ingredients",
    menuRecipe: "1/2 kilo cubed pork",
    menuRecipe1: "1/2 kilo pork ribs",
    menuRecipe2: "1 small bunch spring onion",
    menuRecipe3: "1 kilo ripe tomatoes",
    menuRecipe4: "4 pieces gabi cut in half",
    menuRecipe5: "1/2 kilo sampaloc tamarind",
    menuRecipe6: "10 cups rice washing or water",
    menuRecipe7: "1 bunch kangkong",
    menuRecipe8: "1 bunch sitaw",
    menuRecipe9: "2 pieces eggplant cut in 1 inch pieces",
    menuRecipe10: "2 pieces radish cut in 1 inch pieces",
    menuRecipe11: "patis to taste",
    menuRecipe12: "Instruction",
    menuRecipe13: "In a large pot, put together the cubed pork, the ribs, green onion and tomatoes mashed with a fork.",
    menuRecipe14: "Cover and simmer for 30 minutes till meat is tender.",
    menuRecipe15: "In another pot put in the sampaloc with the water.",
    menuRecipe16: "Boil for about 10 minutes until the sampaloc is soft and mushy. Strain sampaloc water.",
    menuRecipe17: "When the meat is just tender but not overcooked, pour the sampaloc water into the large pot.",
    menuRecipe18: "Add the vegetables according to firmness, beginning with the gabi, then the radish, sitaw and kangkong in the last few minutes of cooking.",
    menuRecipe19: "Season with patis. The chilies may be added if a hot fiery sinigang is desired.",
    menuRecipe20: "",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },
  {
    url: "https://th.bing.com/th/id/R7bbd0914e4500c6ef733eec9e3825320?rik=vz0RKJDtYmjiIA&riu=http%3a%2f%2fwww.magluto.com%2fwp-content%2fgallery%2fpinoy-food-photo%2ffilipino-recipe-pigar-pigar14.jpg&ehk=Ra5XDnMsw5QCIRr4PgYIg80R8NPLnA38UvacxfyFDfA%3d&risl=&pid=ImgRaw",
    menuTitle: "Pigar Pigar",
    menuDesc: "Ingredients",
    menuRecipe: "1 lb (453 g) sirloin beef, sliced thinly",
    menuRecipe1: "1 cup (120 g) liver, sliced thinly (optional)",
    menuRecipe2: "1 large onion, sliced into rings",
    menuRecipe3: "1 tsp salt",
    menuRecipe4: "1/2 tsp black pepper",
    menuRecipe5: "4 tbsp soy sauce (or more, to taste)",
    menuRecipe6: "1/2 head of cabbage, chopped",
    menuRecipe7: "Cooking oil (canola, peanut, or vegetable)",
    menuRecipe8: "Distilled white vinegar",
    menuRecipe9: "Fish sauce",
    menuRecipe10: "",
    menuRecipe11: "",
    menuRecipe12: "Instruction",
    menuRecipe13: "Cut the sirloin beef into thin slices. While there’s no precise measurement for the meat pieces, authentic pigar pigar features thinly sliced pieces of sirloin beef. Slice thin pieces of beef that are 2 in (5.1 cm) to 3 in (7.6 cm) long.",
    menuRecipe14: "Put the sliced beef, salt, pepper, and soy sauce into a deep bowl. Use a spoon or your hands to mix the ingredients together until they are well combined. 4 tablespoons of soy sauce is the minimum amount for the marinade, but you can definitely add more if you prefer.",
    menuRecipe15: "Cover the bowl and put it in the refrigerator for about 1 hour. Stretch plastic wrap over the bowl or cover it with a plate. Tuck the bowl into your fridge and let the meat marinate in the spiced soy sauce for at least 1 hour.",
    menuRecipe16: "Remove the bowl from the fridge and stir the meat. Take off the plastic wrap and give the meat one last stir to make sure everything is thoroughly combined. Most of the soy sauce will be soaked up by the meat at this point.",
    menuRecipe17: "",
    menuRecipe18: "",
    menuRecipe19: "",
    menuRecipe20: "",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },
  {
    url: "https://nutriasia.com/wp-content/uploads/2017/10/kare-kare.png",
    menuTitle: "Kare Kare",
    menuDesc: "Ingredients",
    menuRecipe: "1/4 kilo tripe, or tuwalya, cut into squares, rinsed, scrubbed well with salt",
    menuRecipe1: "1 tablespoon vinegar",
    menuRecipe2: "1/4 cup cooking oil",
    menuRecipe3: "1 teaspoon atsuete seeds",
    menuRecipe4: "1 medium red onion, peeled, chopped",
    menuRecipe5: "3 cloves garlic, peeled, chopped",
    menuRecipe6: "1/2 kilo beef shanks, or pork shanks, cut 1-inch thick",
    menuRecipe7: "1 bunch string beans, cut into 3-inch lengths",
    menuRecipe8: "2 eggplants, cut into wedges",
    menuRecipe9: "2 bunches pechay, separated",
    menuRecipe10: "1/2 cup peanuts, pounded into a paste",
    menuRecipe11: "1/4 cup rice, toasted, pounded into a powder",
    menuRecipe12: "Instruction",
    menuRecipe13: "In a pressure cooker over medium heat, add tripe, vinegar, and enough water to cover. Bring to a boil. Boil 10 minutes, discard water, and refill. Boil again, cover, and lock lid. Simmer until tripe is tender, about 40 minutes. Discard water, and set tripe aside.",
    menuRecipe14: "Meanwhile, in a pot over medium heat, heat oil. Add atsuete. Cook, stirring occasionally, to release its color. Use a slotted spoon to remove and discard seeds. Add onion; cook until softened. Add garlic; cook until fragrant.",
    menuRecipe15: "Transfer mixture to pressure cooker. Add pork shanks and tripe. Pour in enough water to cover. Bring to a boil, then simmer. Remove and discard any scum that rises to the surface. Cover, and lock lid. Cook until softened, about 30 minutes.",
    menuRecipe16: "Release pressure then unlock lid. Add string beans, eggplants, and pechay. Mix peanut paste and toasted rice powder together. Add to pot, and stir in. Simmer, and let thicken. Serve with bagoong on the side.",
    menuRecipe17: "",
    menuRecipe18: "",
    menuRecipe19: "",
    menuRecipe20: "",
    menuRecipe21: "",
    menuRecipe22: "",
    menuRecipe23: "",
    menuRecipe24: "",
    menuRecipe25: "",
    menuRecipe26: "",
    menuRecipe27: "",
    menuRecipe28: "",
    menuRecipe29: "",
    menuRecipe30: "",
  },

  {
  url: "https://th.bing.com/th/id/OIP.Ix_1xp9qdzT_0LZYm2r7_gHaLH?pid=ImgDet&rs=1",
  menuTitle: "Escabeche",
  menuDesc: "Ingredients",
  menuRecipe: "one whole fleshy fish (lapulapu, red snapper, carp or mackerel)",
  menuRecipe1: "1 tsp salt",
  menuRecipe2: "1 tsp pepper",
  menuRecipe3: "some flour to dredge the fish in",
  menuRecipe4: "1 tsp minced garlic",
  menuRecipe5: "1 tbsp ginger root,  cut into thin strips",
  menuRecipe6: "1/2 cup sliced onions",
  menuRecipe7: "1 cup red and green bell peppers, cut into strips",
  menuRecipe8: "2 tbsp lard or oil",
  menuRecipe9: "2 cups water",
  menuRecipe10: "1/4 cup vinegar",
  menuRecipe11: "1/4 cup brown sugar",
  menuRecipe12: "How To Cook",
  menuRecipe13: " Rub the fish with salt and pepper. Dredge with flour and then deep-fry in very hot oil.  Set aside.",
  menuRecipe14: "In a skillet, lightly sauté garlic, ginger, onions and bell peppers in lard or oil. Don’t overcook the onions and bell peppers. Set aside.",
  menuRecipe15: "In the pan, mix together the water, vinegar, sugar, soy sauce, corn starch, salt and pepper. Simmer for about 5 minutes or until the starch is cooked and thickens the mixture.",
  menuRecipe16: "Place the fish on a platter and pour over it the sauce prepared in step 3.",
  menuRecipe17: "Arrange the sauteed ginger, onions and peppers on top of the fish and serve.",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
},

{
  url: "https://cdn.shopify.com/s/files/1/1717/1391/articles/monroe_county_pork_steaks_c_1112x.jpg?v=1587081253",
  menuTitle: "pork steak",
  menuDesc: "Ingredients",
  menuRecipe: "5 pork shoulder steaks",
  menuRecipe1: "1 pinch seasoned salt to taste",
  menuRecipe2: "⅛ teaspoon seasoned pepper to taste",
  menuRecipe3: "2 cups apple cider vinegar",
  menuRecipe4: "1 ½ cups water",
  menuRecipe5: "",
  menuRecipe6: "",
  menuRecipe7: "",
  menuRecipe8: "",
  menuRecipe9: "",
  menuRecipe10: "",
  menuRecipe11: "",
  menuRecipe12: "How To Cook",
  menuRecipe13: " Preheat grill to medium-low heat.",
  menuRecipe14: "Season the pork steaks on both sides with seasoned salt and seasoned pepper. In a large bowl, stir together the vinegar and water, and season with seasoned salt and seasoned pepper to taste.",
  menuRecipe15: "Lightly oil the grill grate. Place pork steaks on the grill. Baste steaks with the vinegar mixture on both sides during the first 15 minutes of grilling. Continue to cook steaks to desired doneness, 10 to 15 more minutes. Discard remaining vinegar mixture.",
  menuRecipe16: "",
  menuRecipe17: "",
  menuRecipe18: "",
  menuRecipe19: "",
  menuRecipe20: "",
  menuRecipe21: "",
  menuRecipe22: "",
  menuRecipe23: "",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
},
{
  url: "https://th.bing.com/th/id/OIP.duuc43ZLnfnc8muJ2vgEhgHaFV?pid=ImgDet&rs=1",
  menuTitle: "Dinakdakan",
  menuDesc: "Ingredients",
  menuRecipe: "1 lb. pig ears",
  menuRecipe1: "1 lb. pig face maskara",
  menuRecipe2: "6 ounces pig liver",
  menuRecipe3: "1 teaspoon ginger powder",
  menuRecipe4: "1 medium red onion sliced",
  menuRecipe5: "6 green and red chili chopped",
  menuRecipe6: "4 tablespoons white or cane vinegar",
  menuRecipe7: "1 teaspoon garlic powder optional",
  menuRecipe8: "1 tablespoon minced ginger",
  menuRecipe9: "3 pieces bay leaves optional",
  menuRecipe10: "1 tablespoon whole peppercorn optional",
  menuRecipe11: "3/4 cup mayonnaise",
  menuRecipe12: "How To Cook",
  menuRecipe13: "Pour 6 to 8 cups water in a cooking pot. Let boil.",
  menuRecipe14: "Once the water starts to boil, you have the option to add dried bay leaves and whole peppercorn. Add-in the pig ears and face. Set the heat to low and continue to boil for 50 to 60 minutes.",
  menuRecipe15: "Discard the water and let the excess water drip. Rub a little bit of salt all over the boiled ears and face. Rub the ginger powder on the liver.",
  menuRecipe16: "Heat-up the grill. Grill the ears and face for 4 to 6 minutes per side or until it turns a bit crisp, but not burnt. Grill the liver for 5 to 8 minutes depending on the thickness.",
  menuRecipe17: "Remove the grilled pig parts from the grill. Let it cool down and start chopping into bite-size pieces.",
  menuRecipe18: "Meanwhile, combine mayonnaise and vinegar in mixing bowl. Stir.",
  menuRecipe19: "Add some ground black pepper. Continue to stir until the ingredients are well blended.",
  menuRecipe20: "Add the ginger, chili, onion, and garlic powder (optional). Toss.",
  menuRecipe21: "Add more salt if needed.",
  menuRecipe22: "Transfer to a serving bowl. Serve.",
  menuRecipe23: "Share and enjoy!",
  menuRecipe24: "",
  menuRecipe25: "",
  menuRecipe26: "",
  menuRecipe27: "",
  menuRecipe28: "",
  menuRecipe29: "",
  menuRecipe30: "",
}
];

/*Homescreen Component*/
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/resto-bg.jpg")}
        style={styles.imageBG}
      >
        <View style={[styles.rowCenter, { marginTop: -150 }]}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        <Text style={styles.brandName}>FOODISTIC</Text>

        <Text style={styles.label}>Username: </Text>
        <View style={styles.rowCenter}>
          <TextInput style={styles.inputTextbox} />
        </View>

        <Text style={styles.label}>Password: </Text>
        <View style={styles.rowCenter}>
          <TextInput style={styles.inputTextbox} secureTextEntry={true} />
        </View>

        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 4 }]}>
            <Button
              title="Sign In"
              color="#fca311"
              onPress={() => navigation.navigate("Menu")}
            />
          </View>
        </View>

        <View style={styles.rowCenter}>
          <View style={[{ width: 120, marginTop: 2 }]}>
            <Button
              style={styles.btnRounded}
              title="Register"
              color="#14213d"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

/*Menu Details Component*/
function MenuDetail(props) {
  return (
    <View>
      <center><Text>{props.route.params.menuTitle}</Text></center>
      <center><Text>{'\n'}{props.route.params.menuDesc}</Text></center>
      <center><Text>{props.route.params.menuRecipe}</Text></center>
      <center><Text>{props.route.params.menuRecipe1}</Text></center>
      <center><Text>{props.route.params.menuRecipe2}</Text></center>
      <center><Text>{props.route.params.menuRecipe3}</Text></center>
      <center><Text>{props.route.params.menuRecipe4}</Text></center>
      <center><Text>{props.route.params.menuRecipe5}</Text></center>
      <center><Text>{props.route.params.menuRecipe6}</Text></center>
      <center><Text>{props.route.params.menuRecipe7}</Text></center>
      <center><Text>{props.route.params.menuRecipe8}</Text></center>
      <center><Text>{props.route.params.menuRecipe9}</Text></center>
      <center><Text>{props.route.params.menuRecipe10}</Text></center>
      <center><Text>{props.route.params.menuRecipe11}</Text></center>
      <center><Text>{'\n'}{props.route.params.menuRecipe12}</Text></center>
      <center><Text>{props.route.params.menuRecipe13}</Text></center>
      <center><Text>{props.route.params.menuRecipe14}</Text></center>
      <center><Text>{props.route.params.menuRecipe15}</Text></center>
      <center><Text>{props.route.params.menuRecipe16}</Text></center>
      <center><Text>{props.route.params.menuRecipe17}</Text></center>
      <center><Text>{props.route.params.menuRecipe18}</Text></center>
      <center><Text>{props.route.params.menuRecipe19}</Text></center>
      <center><Text>{props.route.params.menuRecipe20}</Text></center>
      <center><Text>{props.route.params.menuRecipe21}</Text></center>
      <center><Text>{props.route.params.menuRecipe22}</Text></center>
      <center><Text>{props.route.params.menuRecipe23}</Text></center>
      <center><Text>{props.route.params.menuRecipe24}</Text></center>
      <center><Text>{props.route.params.menuRecipe25}</Text></center>
      <center><Text>{props.route.params.menuRecipe26}</Text></center>
      <center><Text>{props.route.params.menuRecipe27}</Text></center>
      <center><Text>{props.route.params.menuRecipe28}</Text></center>
      <center><Text>{props.route.params.menuRecipe29}</Text></center>
      <center><Text>{props.route.params.menuRecipe30}</Text></center>
    </View>
  );
}

/*Menu List Component*/
function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      {Menus.map((menu, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ecf0f1"
            onPress={() => navigation.navigate(menu.menuTitle)}
          >
            <View style={styles.cardRounded}>
              <Image style={styles.cardImage} source={{ uri: menu.url }} />
              <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
              </View>
              <Text style={styles.menuTitle}>{menu.menuTitle}</Text>
              
            </View>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
}


/*Main Component*/
const Stack = createStackNavigator(); //Create stack navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#14213d",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Menu" component={MenuScreen} /> 
		
		
        {Menus.map((menu, key) => (
          <Stack.Screen
            key={key}
			
            initialParams={{
              url: menu.url,
              menuTitle: menu.menuTitle,
              menuDesc: menu.menuDesc,
              menuRecipe: menu.menuRecipe,
              menuRecipe1: menu.menuRecipe1,
              menuRecipe2: menu.menuRecipe2,
              menuRecipe3: menu.menuRecipe3,
              menuRecipe4: menu.menuRecipe4,
              menuRecipe5: menu.menuRecipe5,
              menuRecipe6: menu.menuRecipe6,
              menuRecipe7: menu.menuRecipe7,
              menuRecipe8: menu.menuRecipe8,
              menuRecipe9: menu.menuRecipe9,
              menuRecipe10: menu.menuRecipe10,
              menuRecipe11: menu.menuRecipe11,
              menuRecipe12: menu.menuRecipe12,
              menuRecipe13: menu.menuRecipe13,
              menuRecipe14: menu.menuRecipe14,
              menuRecipe15: menu.menuRecipe15,
              menuRecipe16: menu.menuRecipe16,
              menuRecipe17: menu.menuRecipe17,
              menuRecipe18: menu.menuRecipe18,
              menuRecipe19: menu.menuRecipe19,
              menuRecipe20: menu.menuRecipe20,
              menuRecipe21: menu.menuRecipe21,
              menuRecipe22: menu.menuRecipe22,
              menuRecipe23: menu.menuRecipe23,
              menuRecipe24: menu.menuRecipe24,
              menuRecipe25: menu.menuRecipe25,
              menuRecipe26: menu.menuRecipe26,
              menuRecipe27: menu.menuRecipe27,
              menuRecipe28: menu.menuRecipe28,
              menuRecipe29: menu.menuRecipe29,
              menuRecipe30: menu.menuRecipe30,
              
            }}
            name={menu.menuTitle}
            component={MenuDetail}
          />
        ))}
	
		
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*Custom Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  brandName: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  label: {
    marginTop: 5,
    color: "#ecf0f1",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputTextbox: {
    margin: 5,
    width: 250,
    height: 50,
    borderColor: "#f1c40f",
    borderWidth: 2,
    borderRadius: 5,
    color: "#14213d",
    padding: 15,
    fontSize: 20,
    backgroundColor: "#ecf0f1",
  },

  btnRounded: {
    borderRadius: 5,
    margin:5
  },

  cardRounded: {
    height: 300,
    backgroundColor: "#fca311",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cardImage: {
    width: 363,
    height: 250,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  menuTitle: {
    fontSize: 24,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Roboto",
    marginTop: 5,
    marginLeft: 10,
  },
  menuDesc: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  star: {
    width: 25,
    height: 25,
    marginTop: 6,
    marginLeft: 10,
  },

});
