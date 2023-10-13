export default function Login({ navigation }) {
  const [isFocusedE, setIsFocusedE] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleFocusE = () => {
    setIsFocusedE(true);
  };

  const handleBlurE = () => {
    setIsFocusedE(false);
  };
  const [isFocusedP, setIsFocusedP] = useState(false);

  const handleFocusP = () => {
    setIsFocusedP(true);
  };

  const handleBlurP = () => {
    setIsFocusedP(false);
  };
  let isSkipped = false;
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/ONBOARDING.png")}
        style={styles.BackGround}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
        <ScrollView contentContainerStyle={styles.FieldsWrapper}>
          <Logo />

          <TextField
            Holder="Email"
            handleFocus={handleFocusE}
            handleBlur={handleBlurE}
            isFocused={isFocusedE}
            value={email}
            onChangeText={(t) => setEmail(t)}
          />
          <PasswordField
            password="Password"
            handleFocus={handleFocusP}
            handleBlur={handleBlurP}
            isFocused={isFocusedP}
            value={password}
            onChangeText={(t) => setPassword(t)}
          />
          <Btn
            color="#FF1313"
            Title="Login"
            navigation={() => navigation.navigate("QuickLog")}
          />
          <Btn
            color="#4D4848"
            Title="SKIP"
            navigation={() => {
              isSkipped = true;
              navigation.navigate("Home", isSkipped);
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={[styles.AccountText, { marginVertical: 10 }]}>
              Create a new account
            </Text>
          </TouchableOpacity>
          <Text style={styles.ForgotPassText}>Forgot your Password?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("PasswordReset")}
          >
            <Text style={styles.AccountText}>Reset it</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 900,
    left: 0,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  BackGround: {
    flex: 1, // Make the background image fill the entire screen
  },
  BgLayer: {
    backgroundColor: "#000000",
    opacity: 1,
  },
  FieldsWrapper: {
    flexGrow: 1, // Make the content take up the full screen height
    width: wp("90%"),
    backgroundColor: "#0B0B0B",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    marginBottom: 200,
  },
  AccountText: {
    fontSize: rf(12),
    color: "#FF1313",
    textAlign: "center",
    fontFamily: "robotobold",
  },
  ForgotPassText: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#E5E5E5",
    textAlign: "center",
    fontFamily: "roboto",
  },
});
