import React ,{useState}  from 'react';
import { Image,Text,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Tab, Tabs, TabHeading,Left, Body, Right,Button} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconn from 'react-native-vector-icons/Entypo';



const DashboardScreen = props => {
    return (

        <Container 
        style={{marginTop:35}} >
        <Tabs style={{backgroundColor:"#2980b9"}}>
          <Tab  heading={ <TabHeading style={{backgroundColor:"#2980b9"}}><Iconn style={{fontSize:30}} name="game-controller" /><Text>  Games</Text></TabHeading>}>
          
            <Container>
                <Content>
                  <TouchableOpacity
                  onPress={()=>{
                    props.navigation.navigate('Dice');
                } }>
                    <Card>
                      <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://images.unsplash.com/photo-1589153954634-f8cbd89d1701?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} />
                            <Body>
                            <Text>Dice</Text>
                            <Text note>Zest.co</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
                         style={{height: 200, width: "100%", flex: 1}}/>
                      </CardItem>
                   
                    <CardItem>
                        <Body>
                                <Button transparent>
                                <Text style={{fontSize:16,fontStyle:"italic",fontWeight:"bold"}}>lost your dice ? Not a problem anymore !!</Text>
                                </Button>
                        </Body>
                    </CardItem>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Card>
                      <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://th.bing.com/th/id/OIP.j-_zGps7wB2MbSkKK0TI1QHaEL?w=321&h=180&c=7&o=5&dpr=1.25&pid=1.7'}} />
                            <Body>
                            <Text>Tic -Tac-Toe</Text>
                            <Text note>Zest.co</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: 'https://previews.123rf.com/images/5second/5second1807/5second180700911/104962070-wooden-tic-tac-toe-game-on-blue-table.jpg'}}
                         style={{height: 200, width: "100%", flex: 1}}/>
                      </CardItem>
                   
                    <CardItem>
                        <Body>
                                <Button transparent>
                                <Text style={{fontSize:16,fontStyle:"italic",fontWeight:"bold"}}>AI based game !! play with Computer</Text>
                                </Button>
                        </Body>
                    </CardItem>
                    </Card>
                    </TouchableOpacity>
                </Content>
            </Container>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#2980b9"}}><Icon style={{fontSize:27}} name="appstore1" /><Text>  Tools</Text></TabHeading>}>
          <Container>
                <Content>
                <TouchableOpacity>
                    <Card>
                      <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://th.bing.com/th/id/OIP.ttmGfjNO6AJOfAxH4PUERQHaEL?w=329&h=184&c=7&o=5&dpr=1.25&pid=1.7'}} />
                            <Body>
                            <Text>Currency Converter</Text>
                            <Text note>Zest.co</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: 'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
                         style={{height: 200, width: "100%", flex: 1}}/>
                      </CardItem>
                   
                    <CardItem>
                        <Body>
                                <Button transparent>
                                <Text style={{fontSize:16,fontStyle:"italic",fontWeight:"bold"}}>Wanna travel different countries ?? Convert your bank balance :P</Text>
                                </Button>
                        </Body>
                    </CardItem>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Card>
                      <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://t4.ftcdn.net/jpg/02/10/64/81/240_F_210648198_hxCxU1sQkNSqDSxD3zjmnYeiWm4DoUIL.jpg'}} />
                            <Body>
                            <Text>To-Do List</Text>
                            <Text note>Zest.co</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={{uri: 'https://www.vitalsmarts.com/crucialskills/files/2018/10/ToDoList_1920x1080.jpg'}}
                         style={{height: 200, width: "100%", flex: 1}}/>
                      </CardItem>
                   
                    <CardItem>
                        <Body>
                                <Button transparent>
                                <Text style={{fontSize:16,fontStyle:"italic",fontWeight:"bold"}}>A To-Do list to keep a track of all your tasks</Text>
                                </Button>
                        </Body>
                    </CardItem>
                    </Card>
                    </TouchableOpacity>
                </Content>
            </Container>
          </Tab>
        </Tabs>
      </Container>
        );
    };
export default DashboardScreen;