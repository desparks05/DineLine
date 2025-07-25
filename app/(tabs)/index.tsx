import { View, StyleSheet, Text, TextInput,ScrollView } from 'react-native';

import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/DineLineImage.png');

export default function Index() {
  return (
    <View style={styles.container}>
      

          <ScrollView>
              <Text  style={styles.text}>
                  Thank you for downloading DineLine!
                  Here are some tips to get you started. {'\n'}{'\n'}
                  Navigating between pages: {'\n'}
                  Located at the bottom of your screen is a toolbar. This toolbar can be used to change the page you are
                  looking at. The icon on the right navigates you to the locations page. The center icon will bring you
                  directly back to this page, the help page. The icon on the right will take you to the campus forum. {'\n'}{'\n'}
                  What is the campus forum?{'\n'}
                  The campus forum is a page dedicated to different activities around campus. This forum allows organizations and individuals
                  to post events hosted with a time and place, helping them to get the word out about the event or warn others
                  that there may be an event in ADUC that will prevent them from getting their food in a timely manner.{'\n'}{'\n'}
                  What is the locations page?{'\n'}
                  The locations page allows for students to view an estimated wait time for a location in ADUC, as well as
                  leave a review on the quality of food that day. On the locations page, you will see (from top to bottom on the left side)
                  an estimated wait time for the chosen location, followed by the quality of food that day, and the hours of operation for that location.
                  To the right of this information, there is a graph displayed. This graph provides a visual of peak times for the location selected.
                  Below this, there is a button that reads "Add Review." This button will prompt a popup that allows you to input your review.
                  Finally, at the bottom of the screen is a scrollable box. This contains all of the user reviews input for that day. At the top of your screen 
                  is a drop-down menu that allows you to select the location you want to view.{'\n'}{'\n'}
                  So, how does DineLine actually work?{'\n'}
                  Dineline functions entirely through user input. We analyze the data given to us by users each day and use that to better calculate our wait
                  times and peak times. Each time a user inputs the wait information, our system becomes a little more accurate. 
              </Text>
          </ScrollView>

      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#0033a0',
        alignItems: 'center',
  },
  imageContainer: {
      flex: 1,
    
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    },
    text: {
        color: 'white',
        flex: 1/3,
        width: 400,

        
    },
   lineHeader: {
       textDecorationLine: 'underline',
       color: '#fff',
       flex: 1.
   }
});
