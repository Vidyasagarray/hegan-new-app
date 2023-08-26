import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.homeScreenWrapper, styles.mainButtonPosition]}>
        <View style={styles.homeScreen}>
          <Text style={[styles.viewAll, styles.viewLayout]}>View All</Text>
          <Text style={[styles.mostViewedProduct, styles.hotSellerTypo]}>
            Most Viewed Product
          </Text>
          <Image
            style={styles.component2Icon}
            contentFit="cover"
            source={require("../assets/component-22.png")}
          />
          <Image
            style={styles.blueDoctorHealthDayFaceboo}
            contentFit="cover"
            source={require("../assets/blue-doctor-health-day-facebook-cover-1.png")}
          />
          <View style={styles.component1}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/user-icon.png")}
            />
            <Image
              style={styles.bellIcon}
              contentFit="cover"
              source={require("../assets/bell-icon.png")}
            />
            <View style={styles.component1Child} />
            <Image
              style={[styles.searchIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={styles.searchForMedicine}>Search for medicine</Text>
            <View style={styles.component1Inner}>
              <View
                style={[styles.rectangleParent, styles.groupParentPosition]}
              >
                <View style={[styles.groupChild, styles.groupParentPosition]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </View>
            <View style={styles.groupView}>
              <View
                style={[styles.rectangleParent, styles.groupParentPosition]}
              >
                <Image
                  style={[styles.heganIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/hegan2.png")}
                />
                <View
                  style={[styles.ellipseParent, styles.groupParentPosition]}
                >
                  <Image
                    style={[styles.groupItem, styles.groupParentPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-11.png")}
                  />
                  <Text style={styles.r}>R</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.mainButton, styles.mainButtonPosition]}
            contentFit="cover"
            source={require("../assets/main-button1.png")}
          />
          <Image
            style={[styles.homeScreenChild, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon,
              styles.mediproduct6IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName, styles.productTypo1]}>
            Product Name
          </Text>
          <Image
            style={[styles.homeScreenItem, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon1,
              styles.mediproduct6IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName1, styles.productTypo1]}>
            Product Name
          </Text>
          <Image
            style={[styles.homeScreenInner, styles.homeLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon2,
              styles.mediproduct6IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName2, styles.productTypo1]}>
            Product Name
          </Text>
          <Image
            style={[styles.rectangleIcon, styles.homeChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.homeChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon3,
              styles.mediproduct6IconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName3, styles.productTypo]}>
            Product Name
          </Text>
          <Text style={[styles.netRate, styles.mrpTypo]}>{`Net Rate: `}</Text>
          <Text style={[styles.mrp, styles.mrpTypo]}>{`M.R.P. `}</Text>
          <Text style={[styles.home, styles.productTypo1]}>Home</Text>
          <Text style={[styles.wishlist, styles.cartTypo]}>Wishlist</Text>
          <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          <Text style={[styles.support, styles.cartTypo]}>Support</Text>
          <Text style={[styles.viewAll1, styles.viewLayout]}>View All</Text>
          <Text style={[styles.hotSeller, styles.hotSellerTypo]}>
            Hot Seller
          </Text>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Image
            style={[styles.homeScreenChild2, styles.homeChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon4,
              styles.mediproduct6IconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName4, styles.productTypo]}>
            Product Name
          </Text>
          <Text style={[styles.netRate1, styles.mrp1Typo]}>{`Net Rate: `}</Text>
          <Text style={[styles.mrp1, styles.mrp1Typo]}>{`M.R.P. `}</Text>
          <View style={[styles.homeScreenChild3, styles.lineViewLayout]} />
          <Image
            style={[styles.homeScreenChild4, styles.homeChildLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            style={[
              styles.mediproduct6RemovebgPreviewIcon5,
              styles.mediproduct6IconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/mediproduct-6removebgpreview-1.png")}
          />
          <Text style={[styles.productName5, styles.productTypo]}>
            Product Name
          </Text>
          <Text style={[styles.netRate2, styles.mrp2Typo]}>{`Net Rate: `}</Text>
          <Text style={[styles.mrp2, styles.mrp2Typo]}>{`M.R.P. `}</Text>
          <View style={styles.homeScreenChild5} />
          <View style={[styles.rectangleView, styles.homeChildLayout]} />
          <Text style={[styles.margin9891, styles.marginTypo]}>
            Margin 98.91%
          </Text>
          <View style={[styles.homeScreenChild6, styles.homeChildLayout]} />
          <Text style={[styles.margin98911, styles.marginTypo]}>
            Margin 98.91%
          </Text>
          <View style={[styles.homeScreenChild7, styles.margin98912Position]} />
          <Text style={[styles.margin98912, styles.margin98912Position]}>
            Margin 98.91%
          </Text>
          <Text style={[styles.shopByCategories, styles.viewAll2Typo]}>
            Shop By Categories
          </Text>
          <Text style={[styles.viewAll2, styles.viewAll2Typo]}>View All</Text>
          <Text style={[styles.sameAsExisting, styles.hotSellerTypo]}>
            Same as existing
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainButtonPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  viewLayout: {
    height: 14,
    width: 49,
    color: Color.dodgerblue,
  },
  hotSellerTypo: {
    height: 18,
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupParentPosition: {
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  homeLayout: {
    height: 114,
    width: 102,
    top: 298,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  mediproduct6IconLayout: {
    height: 87,
    width: 85,
    top: 309,
    position: "absolute",
  },
  productTypo1: {
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  homeChildLayout1: {
    height: 145,
    top: 459,
    width: 102,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  mediproduct6IconPosition: {
    top: 470,
    height: 87,
    width: 85,
    position: "absolute",
  },
  productTypo: {
    top: 562,
    height: 13,
    width: 73,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mrpTypo: {
    left: 25,
    width: 73,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  cartTypo: {
    width: 44,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 87,
    borderTopWidth: 1,
    borderColor: "#015998",
    borderStyle: "solid",
    top: 561,
    position: "absolute",
  },
  mrp1Typo: {
    left: 146,
    width: 73,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mrp2Typo: {
    left: 263,
    width: 73,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  homeChildLayout: {
    height: 12,
    width: 69,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.steelblue,
  },
  marginTypo: {
    height: 10,
    width: 68,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  margin98912Position: {
    top: 464,
    position: "absolute",
  },
  viewAll2Typo: {
    top: 620,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  viewAll: {
    top: 281,
    left: 301,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    height: 14,
    width: 49,
    color: Color.dodgerblue,
    position: "absolute",
  },
  mostViewedProduct: {
    top: 280,
    left: 10,
    width: 118,
    textAlign: "left",
  },
  component2Icon: {
    width: 619,
    height: 461,
    left: 0,
    top: 0,
    position: "absolute",
  },
  blueDoctorHealthDayFaceboo: {
    top: 119,
    left: 26,
    width: 308,
    height: 128,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  userIcon: {
    height: "26.91%",
    width: "7.43%",
    right: "14.32%",
    bottom: "59.76%",
    left: "78.25%",
    top: "13.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  bellIcon: {
    width: "6.71%",
    bottom: "58.89%",
    left: "93.29%",
    right: "0%",
    height: "27.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "13.33%",
    overflow: "hidden",
    position: "absolute",
  },
  component1Child: {
    height: "41.11%",
    width: "96.66%",
    top: "66.67%",
    right: "3.34%",
    bottom: "-7.78%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.snow,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    position: "absolute",
  },
  searchIcon: {
    width: "7.67%",
    top: "72.22%",
    right: "8.55%",
    left: "83.77%",
    height: "27.78%",
    bottom: "0%",
  },
  searchForMedicine: {
    height: "24.44%",
    width: "65.98%",
    top: "78.89%",
    left: "7.67%",
    fontSize: FontSize.size_xs,
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_mid,
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "90.21%",
    width: "30.3%",
    top: "5.09%",
    right: "35.15%",
    bottom: "4.7%",
    left: "34.54%",
    position: "absolute",
  },
  rectangleParent: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  component1Inner: {
    height: "64.86%",
    width: "18.72%",
    top: "-5.56%",
    right: "86.5%",
    bottom: "40.7%",
    left: "-5.22%",
    position: "absolute",
  },
  heganIcon: {
    height: "77.14%",
    width: "90.04%",
    top: "22.86%",
    right: "9.96%",
    left: "0%",
  },
  groupItem: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  r: {
    height: "68.75%",
    width: "37.5%",
    top: "12.3%",
    left: "28.11%",
    fontSize: FontSize.size_8xs,
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  ellipseParent: {
    height: "25%",
    width: "7.26%",
    bottom: "75%",
    left: "92.74%",
  },
  groupView: {
    height: "36.15%",
    width: "35.29%",
    top: "6.67%",
    right: "33.1%",
    bottom: "57.19%",
    left: "31.61%",
    position: "absolute",
  },
  component1: {
    top: 11,
    left: 24,
    width: 326,
    height: 90,
    position: "absolute",
  },
  mainButton: {
    top: 725,
    height: 75,
  },
  homeScreenChild: {
    left: 11,
  },
  mediproduct6RemovebgPreviewIcon: {
    left: 20,
  },
  productName: {
    left: 34,
    width: 73,
    fontSize: FontSize.size_5xs,
    top: 407,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
  },
  homeScreenItem: {
    left: 132,
  },
  mediproduct6RemovebgPreviewIcon1: {
    left: 141,
  },
  productName1: {
    left: 155,
    width: 73,
    fontSize: FontSize.size_5xs,
    top: 407,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
  },
  homeScreenInner: {
    left: 249,
  },
  mediproduct6RemovebgPreviewIcon2: {
    left: 258,
  },
  productName2: {
    left: 272,
    width: 73,
    fontSize: FontSize.size_5xs,
    top: 407,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
  },
  rectangleIcon: {
    left: 11,
  },
  mediproduct6RemovebgPreviewIcon3: {
    left: 20,
  },
  productName3: {
    left: 33,
  },
  netRate: {
    top: 572,
  },
  mrp: {
    top: 581,
  },
  home: {
    top: 775,
    left: 85,
    width: 32,
    height: 13,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
  },
  wishlist: {
    left: 144,
    top: 776,
    width: 44,
  },
  cart: {
    top: 777,
    left: 227,
  },
  support: {
    left: 305,
    top: 776,
    width: 44,
  },
  viewAll1: {
    top: 439,
    left: 308,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    height: 14,
    width: 49,
    color: Color.dodgerblue,
    position: "absolute",
  },
  hotSeller: {
    top: 438,
    left: 17,
    width: 93,
    textAlign: "left",
  },
  lineView: {
    left: 19,
  },
  homeScreenChild2: {
    left: 132,
  },
  mediproduct6RemovebgPreviewIcon4: {
    left: 141,
  },
  productName4: {
    left: 154,
  },
  netRate1: {
    top: 572,
  },
  mrp1: {
    top: 581,
  },
  homeScreenChild3: {
    left: 140,
  },
  homeScreenChild4: {
    left: 249,
  },
  mediproduct6RemovebgPreviewIcon5: {
    left: 258,
  },
  productName5: {
    left: 271,
  },
  netRate2: {
    top: 572,
  },
  mrp2: {
    top: 581,
  },
  homeScreenChild5: {
    left: 257,
    backgroundColor: Color.steelblue,
    height: 1,
    width: 87,
    borderTopWidth: 1,
    borderColor: "#015998",
    borderStyle: "solid",
    top: 561,
    position: "absolute",
  },
  rectangleView: {
    left: 29,
    top: 463,
    position: "absolute",
  },
  margin9891: {
    left: 32,
    top: 463,
    position: "absolute",
  },
  homeScreenChild6: {
    left: 150,
    top: 463,
    position: "absolute",
  },
  margin98911: {
    left: 153,
    top: 463,
    position: "absolute",
  },
  homeScreenChild7: {
    left: 267,
    height: 12,
    width: 69,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.steelblue,
  },
  margin98912: {
    left: 270,
    height: 10,
    width: 68,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  shopByCategories: {
    left: 15,
    color: Color.darkslategray,
    width: 111,
    height: 15,
  },
  viewAll2: {
    left: 306,
    height: 14,
    width: 49,
    color: Color.dodgerblue,
  },
  sameAsExisting: {
    marginLeft: -137,
    top: 667,
    left: "50%",
    textAlign: "center",
    width: 285,
  },
  homeScreen: {
    overflow: "hidden",
    backgroundColor: Color.white,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  homeScreenWrapper: {
    top: 0,
    width: 360,
    height: 800,
  },
  groupParent: {
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default Frame;
