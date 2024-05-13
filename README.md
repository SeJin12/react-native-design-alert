# react native custom alert

src/components/DesignAlert.tsx


## Use Component
```tsx
function App(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={{flex: 1,  justifyContent:'center', alignItems:'center'}}>
      <DesignAlert
        type="success"
        onClose={() => setVisible(false)}
        themeColor="blue"
        title="TITLE"
        onSubmit={() => {
          console.log('submit');
          setVisible(false);
        }}
        visible={visible}
      />
      <TouchableOpacity onPress={() => setVisible(true)}
       style={{justifyContent:'center', alignItems:'center', width:100, height:100, backgroundColor:'blue'}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>Button</Text>
      </TouchableOpacity>
    </View>
  );
}
```

# Type
```tsx
interface Props {
    visible: boolean;
    type: 'success' | 'warn';
    themeColor: 'blue' | 'red';
    title: string;
    message?: string;
    onClose: () => void;
    onSubmit: () => void;
    animationType?: 'none' | 'slide' | 'fade' | undefined;
    alertBoxWidth?: DimensionValue;
    alertBoxminHeight?: DimensionValue;
    alertBoxHeight?: DimensionValue;
    alertBoxBackgroundColor?: ColorValue
    buttonHeight?: number
    buttonletterSpacing?: number
    backgroundColor?: ColorValue
    buttonConfirmTextColor?: ColorValue
    buttonConfirmText?: string,
    buttonCancelBackgroundColor?: ColorValue
    buttonCancelTextColor?: ColorValue
    buttonCancelText?: string
    isImageSource?: boolean
    imageSuccessSource?: ImageSourcePropType
    imageWarnSource?: ImageSourcePropType
    buttonConfirmBackgroundColor?: ColorValue
}
```

### image

![image](https://github.com/SeJin12/react-native-design-alert/assets/35497759/a81e076d-ad05-4d3c-b2f4-fa7252cd4970)

![image](https://github.com/SeJin12/react-native-design-alert/assets/35497759/54c6bd1a-52d0-4c8b-92b3-3ec33eaa3487)

![image](https://github.com/SeJin12/react-native-design-alert/assets/35497759/4daa6f96-9112-46f5-85eb-036a56e72ae4)

![image](https://github.com/SeJin12/react-native-design-alert/assets/35497759/022c4516-3961-4758-be86-5fee46d7909d)
