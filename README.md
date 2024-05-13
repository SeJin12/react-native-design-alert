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
