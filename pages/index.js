import Head from "next/head";
import { useState } from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import InstagramIcon from "../components/InstagramIcon";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

export default function Index() {
  const [darkMode, setdarkMode] = useState(false);
  const handleChange = (e) => setdarkMode(e.target.checked);

  const bigCards = [
    {
      name: "facebook",
      icon: {
        itself: <AiFillFacebook size={25} />,
        color: "text-facebook",
      },
      before: "before:bg-facebook",
      username: "@nathanf",
      stat: {
        status: "up",
        val: "1987",
        type: "Followers",
        in: "12",
      },
    },
    {
      name: "twitter",
      icon: {
        itself: <AiOutlineTwitter size={25} />,
        color: "text-twitter",
      },
      before: "before:bg-twitter",
      username: "@nathanf",
      stat: {
        status: "up",
        val: "1044",
        type: "Followers",
        in: "99",
      },
    },
    {
      name: "instagram",
      icon: {
        itself: <InstagramIcon size={25} />,
        color: "",
      },
      before:
        "before:bg-gradient-to-r before:from-instagram_from before:to-instagram_to",
      username: "@realnathanf",
      stat: {
        status: "up",
        val: "11K",
        type: "Followers",
        in: "1099",
      },
    },
    {
      name: "youtube",
      icon: {
        itself: <AiFillYoutube size={25} />,
        color: "text-youtube",
      },
      before: "before:bg-youtube",
      username: "Nathan F.",
      stat: {
        status: "down",
        val: "8239",
        type: "SUBSCRIBERS",
        in: "144",
      },
    },
  ];
  const smallCards = [
    {
      name: "facebook",
      icon: {
        itself: <AiFillFacebook size={25} />,
        color: "text-facebook",
      },
      stat: {
        status: "up",
        val: "87",
        type: "Page Views",
        percentage: "3",
      },
    },
    {
      name: "facebook",
      icon: {
        itself: <AiFillFacebook size={25} />,
        color: "text-facebook",
      },
      stat: {
        status: "down",
        val: "52",
        type: "Likes",
        percentage: "2",
      },
    },
    {
      name: "instagram",
      icon: {
        itself: <InstagramIcon size={25} />,
        color: "text-instagram",
      },
      stat: {
        status: "up",
        val: "5462",
        type: "Likes",
        percentage: "2257",
      },
    },
    {
      name: "instagram",
      icon: {
        itself: <InstagramIcon size={25} />,
        color: "text-instagram",
      },
      stat: {
        status: "up",
        val: "52k",
        type: "Profile Views",
        percentage: "1375",
      },
    },
    {
      name: "twitter",
      icon: {
        itself: <AiOutlineTwitter size={25} />,
        color: "text-twitter",
      },
      stat: {
        status: "up",
        val: "117",
        type: "Retweets",
        percentage: "303",
      },
    },
    {
      name: "twitter",
      icon: {
        itself: <AiOutlineTwitter size={25} />,
        color: "text-twitter",
      },
      stat: {
        status: "down",
        val: "507",
        type: "Likes",
        percentage: "553",
      },
    },
    {
      name: "youtube",
      icon: {
        itself: <AiFillYoutube size={25} />,
        color: "text-youtube",
      },
      stat: {
        status: "down",
        val: "107",
        type: "Likes",
        percentage: "19",
      },
    },
    {
      name: "youtube",
      icon: {
        itself: <AiFillYoutube size={25} />,
        color: "text-youtube",
      },
      stat: {
        status: "down",
        val: "1407",
        type: "Total Views",
        percentage: "12",
      },
    },
  ];
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Social Media Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={darkMode ? "dark" : ""}>
        <div className='bg-bg dark:bg-dark_bg-default min-h-screen relative text-slate-500'>
          {/* Header */}
          <header className='bg-header pb-40'>
            <div className='container py-9 flex justify-between items-center'>
              <div>
                <h1 className='text-color font-bold text-3xl'>
                  Social Media Dashboard
                </h1>
                <p className='text-sm'>Total Followers: 23,004</p>
              </div>
              <div className='flex-center overflow-hidden'>
                <label
                  className='font-bold flex-center dark:text-text-d_s_white'
                  htmlFor='dark-mode'
                >
                  <span className='mr-3'>Dark Mode</span>
                  <span className='dark-icon'>
                    <span></span>
                  </span>
                </label>

                <input
                  className='translate-x-[-9999%]'
                  type='checkbox'
                  id='dark-mode'
                  onChange={handleChange}
                />
              </div>
            </div>
          </header>

          <main className='container -mt-40'>
            {/* Bid Cards */}
            <section className='cards-container'>
              {bigCards.map((card, i) => (
                <div key={i} className={`card ${card.before}`}>
                  <div className='username'>
                    <span className={card.icon.color}>{card.icon.itself}</span>
                    <span>{card.username}</span>
                  </div>
                  <p className='val text-6xl'>{card.stat.val}</p>
                  <p className='stat-type'>{card.stat.type}</p>
                  <div
                    className={`flex-center font-bold ${
                      card.stat.status == "up"
                        ? "text-lime_green"
                        : "text-light_red"
                    }`}
                  >
                    <span>
                      {card.stat.status == "up" ? (
                        <RiArrowUpFill />
                      ) : (
                        <RiArrowDownFill />
                      )}
                    </span>
                    <span>{card.stat.in} Today</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Small Cards */}
            <section>
              <h1 className='font-bold mb-5 text-3xl'>Overview - Today</h1>
              <div className='cards-container'>
                {smallCards.map((card, i) => (
                  <>
                    <div key={i} className='card'>
                      <div className='container'>
                        <div className='flex-between h-1/2 w-full mb-2'>
                          <h5 className='font-[500]'>{card.stat.type}</h5>
                          <span className={card.icon.color}>
                            {card.icon.itself}
                          </span>
                        </div>
                        <div className='flex-between h-1/2 w-full'>
                          <p className='val text-[2rem]'>{card.stat.val}</p>
                          <div
                            className={`flex-center font-bold ${
                              card.stat.status == "up"
                                ? "text-lime_green"
                                : "text-light_red"
                            }`}
                          >
                            <span>
                              {card.stat.status == "up" ? (
                                <RiArrowUpFill />
                              ) : (
                                <RiArrowDownFill />
                              )}
                            </span>
                            <span>{card.stat.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </section>
          </main>
          <div className='abbr'>
            Challenge by{" "}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
              rel='noreferrer'
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href='https://github.com/l-Gebril'
              target='_blank'
              rel='noreferrer'
            >
              Lamiaa Gabriel
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}