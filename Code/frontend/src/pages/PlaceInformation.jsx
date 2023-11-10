import React from "react";
import "../css/PlaceInformation.css";
import 'bootstrap/dist/css/bootstrap.css';// https://blog.hubspot.com/website/react-bootstrap-css
import  LikeButton from "./LikeButton.jsx"
import { FaStar, FaStarHalf } from "react-icons/fa";
export default function PlaceInformation() {
  const placeData = {
    "categories": [
      {
        "id": 16041,
        "name": "Plaza",
        "short_name": "Plaza",
        "plural_name": "Plazas",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/plaza_",
          "suffix": ".png"
        }
      }
    ],
    "description": "Piccadilly Circus is famous around the world for it's video display and neon signs mounted on the corner building on the northern side. The huge screens have been displaying adverts and brand messages since 1954. The circus is also home to the Shaftesbury memorial fountain and statue of Eros.",
    "hours": {
      "display": "Open Daily 12:00 AM-12:00 AM",
      "is_local_holiday": false,
      "open_now": true,
      "regular": [
        {
          "close": "+0000",
          "day": 1,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 2,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 3,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 4,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 5,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 6,
          "open": "0000"
        },
        {
          "close": "+0000",
          "day": 7,
          "open": "0000"
        }
      ]
    },
    "hours_popular": [
      {
        "close": "2200",
        "day": 1,
        "open": "1300"
      },
      {
        "close": "2200",
        "day": 2,
        "open": "1400"
      },
      {
        "close": "2300",
        "day": 3,
        "open": "1300"
      },
      {
        "close": "2300",
        "day": 4,
        "open": "1300"
      },
      {
        "close": "+0000",
        "day": 5,
        "open": "1300"
      },
      {
        "close": "+0000",
        "day": 6,
        "open": "1100"
      },
      {
        "close": "2200",
        "day": 7,
        "open": "1200"
      }
    ],
    "location": {
      "admin_region": "England",
      "country": "GB",
      "cross_street": "Regent St",
      "formatted_address": "Regent St, London, Greater London, W1D 1NN",
      "locality": "London",
      "post_town": "London",
      "postcode": "W1D 1NN",
      "region": "Greater London"
    },
    "name": "Piccadilly Circus",
    "popularity": 0.9999796121489352,
    "rating": 9,
    "related_places": {
      "children": [
        {
          "fsq_id": "4ec28ecc30f82a2e145951b9",
          "categories": [
            {
              "id": 16016,
              "name": "Fountain",
              "short_name": "Fountain",
              "plural_name": "Fountains",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/plaza_",
                "suffix": ".png"
              }
            }
          ],
          "name": "The Shaftesbury Memorial Fountain"
        },
        {
          "fsq_id": "4ae5bd5df964a520c0a121e3",
          "categories": [
            {
              "id": 16026,
              "name": "Monument",
              "short_name": "Monument",
              "plural_name": "Monuments",
              "icon": {
                "prefix": "https://ss3.4sqi.net/img/categories_v2/building/government_monument_",
                "suffix": ".png"
              }
            }
          ],
          "name": "Anteros"
        }
      ]
    },
    "social_media": {},
    "stats": {
      "total_photos": 16291,
      "total_ratings": 8382,
      "total_tips": 608
    },
    "timezone": "Europe/London"
  }

  const photos = [
    {
      "url": "https://api.foursquare.com/v3/places/4ac518d2f964a52026a720e3/photos?sort=POPULAR"
    },
    {
      "id": "652e7e3de6aed360ee3d0000",
      "created_at": "2023-10-17T12:29:49.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/112340335_hZllKrz6uhnnQQ-YOmZISXfFmZOncj7YWz1ryi6pXR0.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "6137c18ad81bdf7e2271a66c",
      "created_at": "2021-09-07T19:46:18.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/1375385089_0ZHt8eNxpaqLObrwUQgmVBVuy4zvbie_MmbOpH2DAnM.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "5ff9aed5082d7424250fa16e",
      "created_at": "2021-01-09T13:25:41.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/580014514_SakamHyyNCde11nL25nIHj67JaUeL3NQl38AatIl3zk.jpg",
      "width": 1033,
      "height": 1920
    },
    {
      "id": "652d42cfa7748c654817f4a9",
      "created_at": "2023-10-16T14:03:59.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/112340335_WBpN4N9GNrIKafZQ-exCQ2jvO_jVUy8SH419Deyv_xM.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "51922e11498e5c1852fdbb54",
      "created_at": "2013-05-14T12:29:05.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/25951183_4-j3nohFf86tsvf0POo8AidI07iHhc79-WDdOazj1BA.jpg",
      "width": 1440,
      "height": 1440
    },
    {
      "id": "6133dd28cf236a16086d43dc",
      "created_at": "2021-09-04T20:55:04.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/1375385089_f5GNrCR6LZJXYziNHntVUczE0G3a2ptSX1BjKh_asSE.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "563614e7498e860f9fef7353",
      "created_at": "2015-11-01T13:34:31.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/25342353_7W8MYZ8uCTTfy_lib5_gKTnVidyJ3tYNpnMbE3dB6tQ.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "6137c18dc1a9d73418a9b363",
      "created_at": "2021-09-07T19:46:21.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/1375385089_3_ackPBITUMQYsptzB0pTjLU-QROxt9a7Sr8GmamXHM.jpg",
      "width": 1440,
      "height": 1920
    },
    {
      "id": "61113d52d3070f6308f7d951",
      "created_at": "2021-08-09T14:36:02.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/530972570_c9HOYE39THrcDhi7lrl61piXlGgmjjftEltNK6DKz1A.jpg",
      "width": 1017,
      "height": 1920
    },
    {
      "id": "5b5df3724f0e58002b179995",
      "created_at": "2018-07-29T17:03:46.000Z",
      "prefix": "https://fastly.4sqi.net/img/general/",
      "suffix": "/191198976_GmFQsM6_7_hxDmUSXuXvuCddSDl-Ju5AjGfyx0cMGoo.jpg",
      "width": 1440,
      "height": 1920
    }
  ]

  const reveiws = [

    {
      "id": "56012123498e912edef23cc9",
      "created_at": "2015-09-22T09:36:35.000Z",
      "text": "So peaceful and green. Sometimes there are concerts at the weekend. You can lie down on the grass and chill or watch the playful dogs running around or feed the swans in the lake."
    },

    {
      "id": "5560da26498ee626ef0cc1d3",
      "created_at": "2015-05-23T19:51:02.000Z",
      "text": "Local's hint: if you can run/jog, that's how you need to tour Hyde Park. One cannot come to London and not spend some time at Hyde Park! I'd recommend going to Hyde park to anyone, with anyone"
    },
    {
      "id": "543d58ef498ed2e657a4767c",
      "created_at": "2014-10-14T17:10:07.000Z",
      "text": "London perl! One of the best and oldest parks in whole world. It`s so big, that it`s difficult to see everything for one day! Must see in London"
    },
    {
      "id": "545943ee498edc02a1f47cf9",
      "created_at": "2014-11-04T21:23:58.000Z",
      "text": "My favourite place in London. It's always nice to walk around the park on a sunny day, either alone or with some good company. Be careful not to get lost. ;)"
    },
    {
      "id": "5839f07d730a9232949ccb36",
      "created_at": "2016-11-26T20:28:45.000Z",
      "text": "A very huge park with alot of things to do, u can enjoy ur cup of coffe in the morning, take a walk or just have a relaxing day over there👌🏻"
    },
    {
      "id": "5681cd7f498e1ba1c3724881",
      "created_at": "2015-12-29T00:02:07.000Z",
      "text": "Central London's largest open space. Regularly used as a space for concerts. Visit speakers corner where members of the public air their political views or read poetry."
    },
    {
      "id": "54327f53498eb60103bd952c",
      "created_at": "2014-10-06T11:38:59.000Z",
      "text": "Wonderful Park in the heart of London. Park Lane to one side, Kensington Palace and The Royal Albert Hall on the other. You can explore this Park forever"
    },
    {
      "id": "55cb20a1498ebdb28c62e099",
      "created_at": "2015-08-12T10:32:01.000Z",
      "text": "One of the best and largest parks In london with a stunning view of the lake & lots of activities to do .. I can set there all day."
    },
    {
      "id": "4e7356f91495dffb8edb9506",
      "created_at": "2011-09-16T14:02:33.000Z",
      "text": "Just one of London's great parks (we're so lucky!). Formal gardens, wild bits, horse riding, playgrounds, tennis, outdoor swimming, the Serpentine Gallery... you could easily spend a whole day here!"
    },
    {
      "id": "5a504be0bb2a473f6674be3c",
      "created_at": "2018-01-06T04:09:04.000Z",
      "text": "Can't believe this park has been here for centuries. It's beautiful and great for a long walk. Try the walk from Marble Arch towards Green Park to see Buckingham Palace. Relaxing."
    }
  ]

  // Sort the reviews by 'created_at' in descending order to get the most recent first
  const sortedReviews = reveiws.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Take the top three reviews (most recent)
  const recentReviews = sortedReviews.slice(0, 4);
  const maxRating = 5;
  const ratingOn5Scale = (placeData.rating / 2); // Assuming the rating is on a scale of 0 to 10

  // Create an array to render stars
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= ratingOn5Scale) {
      stars.push(<FaStar key={i} color="#F6BE00" style={{height : '30px' }}/>);
    } else if (i - 0.5 <= ratingOn5Scale) {
      stars.push(<FaStarHalf key={i} color="#F6BE00" style={{height : '30px' }} />);
    } else {
      stars.push(<FaStar key={i} color="gray" style={{height : '30px' }}/>);
    }
  }


  return (
    <>



      {/* <div className="place-info">
        
        <h1>{placeData.name}</h1>
        <p>{placeData.description}</p>
        <div className="rating">
          <span>Rating: {placeData.rating}</span>
        </div>
      </div> */}




      {/* Reviews section
      <div className="reviews">
        <h2>Most Recent Reviews</h2>
        {recentReviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="review-text">{review.text}</div>
            <div className="review-date">
              {new Date(review.created_at).toDateString()}
            </div>
          </div>
        ))}
      </div> */}
 
      {/* <style>
        {
          .place-info {
            padding: 20px;
            border: 1px solid #ccc;
            margin: 10px;
          }

          .rating {
            font-weight: bold;
          }

          .reviews {
            margin-top: 20px;
          }

          .review {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #eee;
            background-color: #f5f5f5;
            width : 400px
          }

          .review-text {
            font-size: 14px;
          }

          .review-date {
            font-size: 12px;
            color: #888;
          }
        }
      </style>
       */}

      <div className="place-info-container">
        {/* First Div: Image */}
        <div className="place-image">
          <img
            src={photos[0].prefix + photos[0].suffix}
            alt="Place Photo"
            width={photos[0].width}
            height={photos[0].height}
          />
        </div>

        {/* Second Div: Place Information */}
        <div className="place-info">
          <h2>{placeData.name}</h2>
          {/* //<p>{placeData.description}</p> */}
          <div className="best-time">
            <p>Best Time to Visit: {placeData.hours.display}</p>
          </div>
          <div className="address">
            <p>
              Address: {placeData.location.formatted_address}, {placeData.location.postcode}
            </p>
          </div>
          <div className="rating">
        <span>Rating: {stars}</span>
      </div>

      

        </div>
       
      </div>
      <div className="d-flex justify-content-center mx-auto Des" style={{ height: '9vw', background: '#f0f0f0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontSize: '1.2vw', width: '80vw' }}>
  {placeData.description}
</div>



      {/* add this classes if you want alert message alert alert-warning alert-dismissible fade show */}
      <h2>Most Recent Reviews</h2>
      <div className="reviews">
        {recentReviews.map((review) => (
          <div className="review "  key={review.id}>
            <div className="review-text">{review.text}</div>
            <div className="review-date">
              {new Date(review.created_at).toDateString()}

            </div>
          <LikeButton/>
          </div>
        ))}
      </div>
    </>
  )
}
