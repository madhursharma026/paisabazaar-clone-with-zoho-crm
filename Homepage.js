import { StyleSheet, ScrollView, Image, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import CarouselSlider from './Components/Carousel';
import CarouselSlider2 from './Components/Carousel2';
import { useNavigation } from '@react-navigation/native';

export default function Homepage() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Image
          style={{ width: '50%', height: '2%' }}
          source={{
            uri: 'data:image/png;base64,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',
          }}
        />
        <CarouselSlider />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subHeading}>CREDIT PRODUCTS -------------</Text>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: '100%', height: '100%' }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
            }}
          /> */}
          <View style={styles.column}>
            <TouchableOpacity onPress={() => navigation.navigate('PersonalLoan')}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahKF9Hn7kB_fu5PsUQUPOod9SrWX1QvHpiYV9YtlfANVoeXLpUFcYagHf_CYv6NHjQ3E&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: '100%', height: '100%' }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
              }}
            />
          </View>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://media.istockphoto.com/id/1159449758/vector/micro-finance-icon.jpg?s=612x612&w=0&k=20&c=URdeZiYk7uthKx4k_efClzyXPNYO8fXUohOwUFruGGw=',
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          {/* <Image style={styles.column}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOW3c3zs4qjIEUULmI2WxpRiilojbFUoCBA&usqp=CAU',
            }}
          /> */}
          <View style={styles.column}>
            <Image style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://www.madhuvan.com/wp-content/uploads/2018/01/personal-loan-icon.png',
              }}
            />
          </View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subHeading}>CREDIT SCORE IMPROVEMENT -------------</Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAwFBMVEX///8AAAAREiT+/v5nZ2dSUlLa2to4ODgICAjl5eVtbW0ZGRmdnZ3Hx8cPECW0tLRYWFgGBg4vLy/4+PiUlJSBgYHw8PDQ0NCnp6cAABhfX18AABvW1tbu7u4AABVycnK7u7tJSUmHh4cAABAgICB5eXkoKCg9PT2YmJihoaEyMjIeHh4QEBCFhYUJCh9dXGaNjpQaGyxWVl87O0ZJSlZoaXCZmaBCQk4iIzIuMD18fISFhY11dnxQUVrKyc5oaHBY/09dAAAOUElEQVR4nO2dCUOiTBjHQTzCQioMVDxAt6zdVlktPMvv/63eOTgG5DSOobf/blkJOD+eeZ65B4YpSBz4z4FvsnAz+M0CXT01noURfgd9VV0Ij2Mkof2HJfU6ECT4BvddIDlNZ8/V0CDi94Bk+HoAIdSg+R3yKrAUo72GIAKJ1YeEAN1wQqC/XMUpoSs+RiKy7EPlEaU4RABZ8QIk1opQj2Wn8kviJgkQEWQlLQkLPq6dCBFAVhIRlRrJrFhZSBhukiNW1SdTWLGSkLAantQXbU3KTnRKcekRK+aTl1jRgqwKJkhnRLi5r0/av6sPGRFu6gpoGDPSMMTM1fBJ1CIOy6ivmlU3YBjhOgyyEpbkwlrEr4p1AKQc/gqGpB8RFv2hVlRw545lymGwJasQXUMRrxW3fwpD/gk8jn6fDPdFxetp4ZacUOySKNyE+eL10J9y8Gsz2CfbVAee8HAzPDsU3pIQSHoDT0S4ubbDDXk4ggzxSWohE4UbRzi6NkN8ktIaT3gdVYg4KwSyXViykwredSnMF9lpxInAkk/BkJTZMTKisq/NiPNgdA2GpC27RoQblm1EjU1FBR6pQII4cVEZNaZMRwN3YeUkNUNaXAwi243JczC7BluyXhBCrGCTeBCByD7EjKNykYGHBlNCK0YisrfR6bTKyRBIiQbImIwK9IePqX9GVetosGQ8Isv2mNghcQgZfHLpkHHhBuu6afdwRFyIY8Tgs+ult0JifBFLlxFG1HWAtSQ9BLJMn4wPN7Ya8nm7w3+tUEPCwFOSYJITZFQXMhITvqeEnV0WJExvYkQEGRdcGT64CcJCnyylypM8o2LpcmzgCWdkByUgcmkRk0AOI86uF59d0yM6kOEXDYs5SGXUeFIjRkKiiYO3kWcXC8nFVsOjIQOSioZAYs6uF1njuSSjWpCjEEuCP42CK6yECgw8lyMiyKBiEhYc9/FnFxR4UPKkaM+JhJSx73mvCRBbSc4upFrHoR64S61oQ/rvGkCcJzu7CEuibJZuUkoQpMcpwY+jRFaEGhTACL6mX0LEgYd0SmDF4E6AQN3mH105RvsiohVdiWuOEoQbVwX45Ci8UpkK0r1pycJNkZBJJqTGQ1qBB+bYtIg5B57wXpe0uhfsclJI4Yu2Bnn6JMdcMn8qOJ3iSJZ58bKS9jbPzBrRxEuv64g1ETEa5OiTkc2fIpWbT3LcV2o42WqQF6R8QYDIS3n5ZGjPWRm6zceSvbK5PMon8DyXjeVVLj4ZvTyseOUBSRtjHj5JHWMOkPQxZp9dX8omClDWkF9vH+eg22yLkOZV2UBBamTa1JISdp8VrEamlnwoGydYGUZXLnZMoixl6ZNS6s6XgpRlOUlZjdWVnh2kHDu6VJYyCzwcZc0rUrdyJoiwv7BRNkuosvJJjuEv703LW43MfJLKCh1WJoEHdW0rYi7q3Tw0vton1vCPbl7KmcVFgiWNms9f697MKvDkJLSCArzwvZBa8RNQbDCgGxIPLqOJMYIveM8fRWHYlCVJ4puC9tKOytLZBZ4cZAHib5pTaZxPhfNUj8SH0IHZDGs8mYtzCeH0GDQk//thKBF/tGIB+lUW2iEDTHgiafAnWB9SFJPn063PJ+dCCL9boszYW/DZ+RgfjH/kn4MzbUMOnAvKkWLsf+43ays86wMZLu5d8nTO/zvjPYFzET1pkyXnYPsAe5qWfTdGwb1oIUVI6SsMzmSx2D+ev4/eHAUO3utScG4dDXuTRqs86e3ecETMrbdSiXyvKU4HOjqq0X4WmhKRb0GeDoAcEIh2BpGECQ3jbk+PitNEsrMu32v7Y6j+IMjYYeBBctCkqBevwcGhol4AQDLBXSAtM0Jf1EJmdT1Nm26gDGrwebZZ5BhFzzPRqfWIXRH+6+kRx9UVbCXYz3RejNQ9jJT18KNmIEqfEtfV2ebtqDQ8r+RpLqRMzxg/Ut1O2SjJ3MOe5ZZM8wxyYOcGhqesXY+HL0CiA8Plueq8VT6f74zRtMoeWfe9cVWW8MfrspWwm6Q35d7eX+FsssKzlSE885zuu5rSLEuK1p2jaMilnEB6pVkFpX/ykI5DM3mpSega98I0VKzaSyDi9XzeCmw/ilZ29Z11xcNrEubVh3HL9/IVR9ZwzhBboA7Ej0D7ccQLz4OzFdqiVZfRvX+GEw+JFYd/pZKrrE6TB6TVV5hdTQRv454XfYHySsCQvtVMIkNWD7qBSxJK0dk6yEfoQ8TU7KCegifLj713B1C5ZnwoN596xXvSqZ/vvIOLRNHjmg3cQJM8le4psfhHl+yWSrnCi0c8lZup3bj0H8kxI508sIvN5MkDA4ZxVmgqlDQfUdXTMzImWm+cHQn/S54RX2xvz6LmR0a2KwZtOnzR2gyBzIJC1L0HN+SvN7f6ly1M3awatEtRGUJ3mqykCpEexPkgoc1BY5LI6jdO1p1T8mACbEaWTKLbcRNyOFlPm0ucr+DRnFUMD1Q4o9WRRZgRb6YXakj8BjlrWEO2JcLykGk4bzndXiUK32hi4O9+5Pbvhd0Vr/8NMIZj2ieJsTtJGnUK1JYRKNFp0UuSvTjPaowmuiNOi6XOMKlWOeUt2FkI0ucGDB0xJxAx96uLF/7Yv4qUMU5xse7+QUxWKwFHuIa8xdnXKhOfRpQxaijFbla9SmhGzjMvikeZwarbwNtGE+MV7nxy+7ynyYI9ClZuBkeruKw79Qu2HmlifJIhElERi6zhkFkVMLlVuimCxoZ9hlegifFWQj3iTsnxlHQ02LuxwC1iRPUIFMSoYnxEiXUrOZH77vkzq1vqt1DkQvUC3E1OE2MXJc41yENCMyK5jcZr3HHZwmGZMsYe462zvKSoX3JOjY29QvtIMDqsQKC4TBcjTJLbdEzzSCiOcXv6mygMzW1E2hgZsskgpsiqZGDFXqhwlDJylzIyXkZi9JI2RiYjRjeTU8jIMNkwOvo/MDI/jIXrh/GHMQmj3ihdupYzI19U11uU8mZMdb189H9gxPphDNcP4/dkdNue9DDiyJpVu4NzpytTxGjP0czIjhjS0+4om9Ed/nT7OrRUV3BHWi0WZ/I/HYx44rwivgC5/TKTlzRy57FM4a9a074uDYx4gJH/m/Xi2HlPosWO2Ia5LHG+V9AdLJ8RIqZ6+m4aoaZM+YzQipltyhcIWT4jczb9L1MN/YzR2/lnzWYvb8ho+8hg6T5/JFpxhTBaJVh+ORVK8NuxjHlImW4fea7JGSPTfL4pSs+48pzzEvXXc8YiN6zEC0zy3v3jPK4WyYgfsZvJprwRooAx/Dl8GemHMW9dwHh7o2niNFXPd8UY7wVctslp4lS1GHX76VGp9tSqFOOvkbP8Os1O95VidCZqMKlqgFVivJbcrQO4FLm1Soy+x53KSau5VWJ8IQk905WjVSXGHknIXc4I6+TXRelyRu5yO8K7I/HFSbrYjl/Lq4WrYDtap1PK+OyegsrJpDtrVsmOxL4U3jnZ34iRHZFnJS8AKsU4dTyJ863j/D6MrELUyZPvj1AtRgiJEdNsE1Mxxrrd7OBT7B9eMca2HVnT9Dv/vxhLW6r7Y8csGO19hsrbUiZ/RnttslDaLg/5M9pF6UNpe3Xkz2jX+lrk9jwUM1qGSMXobKgjlMGXlnFu75EY9VTzM0bJDqwDdxMiehlZDTePU43nEUcrxeOlZ3zCm8ek2suf2LGrFfdEeBoY2ddpkxfSjeaBj3Dm4NW5iA1OaGG8QJ4RoIlUhiXzZwRU7mcM+DIKkNznAzCeLcCeRKkoSvdTcp/X4Z+uMheL3IYegeY9+oD7xr0Pc9KnolCMhqg8znme1QBPkeXydokQtfBmufnub6vZM8tLgsR72uX6gNeWzFjVt5K2Q+7iwirPB58JhOdrZTwp7xo9CoDL8Ql2XXKjc0YuI79O8Q0+26w4K3XtZoa92KP5mG+EC5K1naiUYlvg5PojEoMHtvjeoODN9Fv2wxmG7azXd7S6xCCQZ+i4qWg3k3ZhqmvOxyvidHCblSZdrWldFzOSm4C/tsVmQVUdKwM5RcfVVWabhrPOPuDsPaNBvbB3rjLOMVGao0/X7u9yFHtk0Ou4U7PVKVIq+vSZ++nZqeNcVGVyuDxt+mH8HophXHhcZQG/FjmmJh9ZjP/+wW/W3+zX2qK/G6tb59jFFvBtNpWDxIyd9b5f2x1n/UVNVe8OnVq/r9bU8U7RPtef6qJ/N67VZnfskJ1tl8td1SAtO47NWv99sz/sxsf96XCY7ffv6ulkGuyupnx29p8G2+kJO541l2+rf9FXzEHAP4j7uhhbvyy8x6jgjTH8pvZr8KWmWm9ZjP3j6s44rlnj4308NjrHj7v9yuzveGXPDmvLz5m2Fw/bGd+7mZXgj4v1W2c5UyGAOl7M1ua6D0lmK5C7+os+0uJt/f5hboz3rbk7HTrHrbGaHf95GBdbo7YXDaNnLGpjQ+3Nav3eqa+yH5+GopoP7Jv4yS5YblRSxDGOm8Ppw9gfl8bmYG5Wxlt3974/nBb/jOVxvzzsjf7h7YU1tuLSrJmdw5v40dusza2HsTYzDNWosez7x3h22B52d6vjcbz7x+57n+ujyJqGthyz/PKzXwZi/2i+me8mu3w7fBzeF/vDyqgZB5Aodv9WM5fixlieVuyL+n5iTXNsHsFLhzX35nrhYVRP5t3OOO77xvG0NbbG0aidZntBELcrpdb71NSNIGw+2d5RDU9KblpsjmNjuTLW+5Pxtl6Zm/2HuT4elqePHbTj+275dtp99N5MQLB+WfeMlbgxPxYnnx2hAy9g4QDKigXQtg9KRhBcQb4HjtAZ19R+B/xZLT7goMSBhKjAF/vga7HAryD0q+BnFbyCcAOi0gzGHOips7E6C4g5fnXOfqiwfupy30M/jN9D/wEJWpKcrMYbDAAAAABJRU5ErkJggg==',
                }}
              />
            </View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subHeading}>CREDIT SCORE IMPROVEMENT -------------</Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subHeading}>INSURANCE & OTHER PRODUCTS -------------</Text>
          <View style={styles.row}>
            {/* <Image style={styles.column}
              source={{
                uri: 'https://st2.depositphotos.com/8301258/11646/v/950/depositphotos_116464174-stock-illustration-umbrella-logo-symbol-rainy-season.jpg',
              }}
            /> */}
            <View style={styles.column}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://st2.depositphotos.com/8301258/11646/v/950/depositphotos_116464174-stock-illustration-umbrella-logo-symbol-rainy-season.jpg',
                }}
              />
            </View>
            {/* <Image style={styles.column}
              source={{
                uri: 'https://media.istockphoto.com/id/1328395253/vector/hundred-points-emoji-icon.jpg?s=612x612&w=0&k=20&c=zy2NI8jM4FQhOuIqv4EfkqRvLamb-DeL4DDhqBKsS74=',
              }}
            /> */}
            <View style={styles.column}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://media.istockphoto.com/id/1328395253/vector/hundred-points-emoji-icon.jpg?s=612x612&w=0&k=20&c=zy2NI8jM4FQhOuIqv4EfkqRvLamb-DeL4DDhqBKsS74=',
                }}
              />
            </View>
            {/* <Image style={styles.column}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            /> */}
            <View style={styles.column}>
              <Image style={{ width: 50, height: 50 }}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
            <View style={styles.column}></View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subHeading}>KEEPING YOU FINANCIALLY HEATHY AND SAFE, ALWAYS</Text>
          <CarouselSlider2 />
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image style={{ width: 15, height: 15, marginTop: 10 }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/17/17704.png',
              }}
            />
            <Text style={{ fontSize: 12 }}>Home</Text>
          </View>
          <View style={styles.column}>
            <Image style={{ width: 40, height: 20, marginTop: 5 }}
              source={{
                uri: 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/good-credit-score.jpg',
              }}
            />
            <Text style={{ fontSize: 12 }}>Score</Text>
          </View>
          <View style={styles.column}>
            <Image style={{ width: 20, height: 20, marginTop: 5 }}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
            <Text style={{ fontSize: 12 }}>Card</Text>
          </View>
          <View style={styles.column}>
            <Image style={{ width: 15, height: 15, marginTop: 10 }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/61/61205.png',
              }}
            />
            <Text style={{ fontSize: 12 }}>Account</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    height: '100%'
  },
  subHeading: {
    marginRight: 16,
    fontSize: 12,
    color: 'blue',
    fontWeight: 500,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    marginTop: 10,
  },
  column: {
    flex: 1,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20,
  }
});
