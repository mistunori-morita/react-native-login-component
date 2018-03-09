# react-native-login-component
### 画像を利用する際
- importで[Image]をする
```js

//例
import {
  View,
  Text,
  //これのこと
  Image,
  StyleSheet,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginwrap}>
        //ここで画像のパスを利用して読み込みでOK
          <Image source={require('./img/icon.png')}/>
        </View>
      </View>
    );
  }
```

```js
//スタイル
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginwrap: {
    //flexGrowを使って(css だと自動的に伸びて余白を埋める)中央にもってきてる
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  }
});
```

- App.jsで全体に背景色をつける方法もあるが、Loginの方のcontainerにDimensionsを使うことでもコンポーネント全体にスタイルをつけられる
```js
import {
  View,
  Text,
  Image,
  //これを追加
  Dimensions,
  StyleSheet,
} from 'react-native';


//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    //これで横に広げられる
    width: Dimensions.get('window').width,
  },

```
