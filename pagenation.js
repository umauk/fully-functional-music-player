async function fetchData() {
  let array = [];
  const response = await fetch("https://project-server-2.onrender.com/data");
  const data = await response.json();

  data[0].items.forEach((element) => {
    array.push(element);
  });

  //main parent div in js file-------------
  let parent = document.querySelector(".parentDiv");

  //main childDiv1 in js file ---------------
  let childDiv1 = document.createElement("div");
  childDiv1.classList.add("childDiv");

  res = array.slice(0, 10);

  for (i of res) {
    cards_items(i);
  }

  //Previous button--------------
  // let page_item1 = document.querySelector(".page_item1");

  // page_item1.addEventListener("click", () => {
  //   childDiv1.innerHTML = "";
  //   n = p;
  //   p -= 10;
  //   res = array.slice(p, n);

  //   for (i of res) {
  //     cards_items(i);
  //   }

  //   if (p ==-10 && n == 0) {
  //     page_item1.classList.add('disabled')
  //   }
  //   if(p==0 && n==10){
  //     page_item1.classList.remove('disabled')
  //   }
  // });

  //one button---------------
  let page_item2 = document.querySelector(".page_item2");

  page_item2.addEventListener("click", () => {
    childDiv1.innerHTML = "";
    page_item2.style.background = "red";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res = array.slice(0, 10);

    for (i of res) {
      cards_items(i);
    }
    // p = 10;
    // n = 20;
  });
  //second button--------------
  let page_item3 = document.querySelector(".page_item3");

  page_item3.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "red";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res1 = array.slice(10, 20);

    for (i of res1) {
      cards_items(i);
    }
    // p = 20;
    // n = 30;
  });
  //third button------------
  let page_item4 = document.querySelector(".page_item4");

  page_item4.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "red";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res1 = array.slice(20, 30);
    for (i of res1) {
      cards_items(i);
    }
    // p = 30;
    // n = 40;
  });

  //fourth button---------------
  let page_item5 = document.querySelector(".page_item5");

  page_item5.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "red";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res1 = array.slice(30, 40);
    for (i of res1) {
      cards_items(i);
    }
    // p = 40;
    // n = 50;
  });
  //fifth button-------------
  let page_item6 = document.querySelector(".page_item6");

  page_item6.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "red";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res1 = array.slice(40, 50);
    for (i of res1) {
      cards_items(i);
    }
    // p = 50;
    // n = 60;
  });

  //sixth button------------------
  let page_item7 = document.querySelector(".page_item7");

  page_item7.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "red";
    page_item8.style.background = "none";
    page_item9.style.background = "none";

    res1 = array.slice(50, 60);
    for (i of res1) {
      cards_items(i);
    }
    // p = 60;
    // n = 70;
  });

  //seventh button -------------
  let page_item8 = document.querySelector(".page_item8");

  page_item8.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "red";
    page_item9.style.background = "none";

    res1 = array.slice(60, 70);
    for (i of res1) {
      cards_items(i);
    }
    // p = 70;
    // n = 76;
  });

  //Eight button ------------
  let page_item9 = document.querySelector(".page_item9");
  page_item9.addEventListener("click", () => {
    childDiv1.innerHTML = "";

    page_item2.style.background = "none";
    page_item3.style.background = "none";
    page_item4.style.background = "none";
    page_item5.style.background = "none";
    page_item6.style.background = "none";
    page_item7.style.background = "none";
    page_item8.style.background = "none";
    page_item9.style.background = "red";

    res1 = array.slice(70, 76);
    for (i of res1) {
      cards_items(i);
    }

    // p = 80;
    // n = 76;
  });

  //Next button-------------
  // let page_item10 = document.querySelector(".page_item10");

  // page_item10.addEventListener("click", () => {
  //   childDiv1.innerHTML = "";
  //   res = array.slice(p, n);
  //   for (i of res) {
  //     cards_items(i);
  //   }
  //   p += 10;
  //   n += 10;

  //   if (p == 80 && n == 76) {
  //     p = 0;
  //     n = 10;
  //   }
  // });

  let currentlyPlaying = null;
  //---function loop-----all code main part-----
  function cards_items(i) {
    let hover_div = document.createElement("div");
    hover_div.classList.add("hover_div");

    //image push div----
    const img1_div = document.createElement("div");
    img1_div.classList.add("img1_div");

    //images document---
    const img = document.createElement("img");
    img.src = i.track.album.images[0].url;
    img1_div.append(img);
    childDiv1.append(img1_div);

    //music code--------------
    const music_btn_div = document.createElement("div");
    music_btn_div.classList.add("music_btn_div");
    const audio_tag = document.createElement("audio");
    const musicBtn = document.createElement("button");
    musicBtn.classList.add("musicBtn");
    musicBtn.innerHTML = "▶️";

    const sourceMusic = document.createElement("source");
    sourceMusic.src =
      i.track.preview_url || "./[iSongs.info] 04 - Bujji Theme.mp3";
    audio_tag.append(sourceMusic);

    function showButton() {
      musicBtn.style.display = "block";
    }

    function hideButton() {
      musicBtn.style.display = "none";
    }

    function mouseover() {
      showButton();
    }

    function mouseout() {
      if (audio_tag.paused) {
        hideButton();
      }
    }
    function stopCurrentlyPlaying() {
      if (currentlyPlaying && currentlyPlaying !== audio_tag) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }
    }

    hover_div.addEventListener("mouseover", mouseover);
    hover_div.addEventListener("mouseout", mouseout);
    musicBtn.addEventListener("mouseover", showButton);
    musicBtn.addEventListener("mouseout", () => {
      if (audio_tag.paused) {
        hideButton();
      }
    });

    musicBtn.addEventListener("click", () => {
      if (audio_tag.paused) {
        stopCurrentlyPlaying();
        audio_tag.play();
        currentlyPlaying = audio_tag;
        musicBtn.innerHTML = "⏸️";
        showButton();
      } else {
        audio_tag.pause();
        musicBtn.innerHTML = "▶️";
        hideButton();
        currentlyPlaying = null;
      }
    });

    audio_tag.addEventListener("play", () => {
      musicBtn.innerHTML = "⏸️";
      showButton();
    });

    audio_tag.addEventListener("pause", () => {
      musicBtn.innerHTML = "▶️";
      hideButton();
    });

    music_btn_div.append(musicBtn);
    childDiv1.append(music_btn_div, audio_tag);

    //music Name div details------------
    const music_div = document.createElement("div");
    music_div.classList.add("heading_tag");
    const musicName = document.createElement("p");
    musicName.innerHTML = i.track.album.name;
    music_div.append(musicName);

    //Artists Name details
    const laval_name_div = document.createElement("div");
    laval_name_div.classList.add("Artists");
    const laval_name = document.createElement("div");
    laval_name.innerHTML = "Artists: " + i.track.artists[0]?.name;
    laval_name_div.append(laval_name);

    hover_div.append(img1_div, music_btn_div, music_div, laval_name_div);
    childDiv1.append(hover_div);
  }
  parent.append(childDiv1);

  //search bar -------------

  let search = document.querySelector(".input");

  search.addEventListener("input", function () {
    if (!search.value) {
      childDiv1.innerHTML = "";
      res = array.slice(0, 10);
      console.log(res);
      for (i of res) {
        cards_items(i);
      }
    } else {
      let filtered = array.filter((ele) =>
        ele.track.album.name.toLowerCase().includes(search.value.toLowerCase())
      );
      childDiv1.innerHTML = "";
      for (let i of filtered) {
        if (true) {
          cards_items(i);
        }
      }
    }
  });

  //left said nav bar----------------
  const home_div_btn = document.querySelector(".home_div_btn");
  const search_div_btn = document.querySelector(".search_div_btn");
  const input_div = document.querySelector(".input_div");
  const search_btn = document.querySelector(".search-btn");

  home_div_btn.addEventListener("click", () => {
    window.location.assign("./index.html");
  });
  search_div_btn.addEventListener("click", () => {
    input_div.style.display = "block";
  });

  let profile_details = document.querySelector(".profile_details");
  let profile = document.querySelector(".profile");

  let logOut_btn = document.querySelector(".logOut_btn");

  profile.addEventListener("click", () => {
    if (
      profile_details.style.display === "none" ||
      profile_details.style.display === ""
    ) {
      profile_details.style.display = "block";
      logOut_btn.style.display = "block";
    } else {
      profile_details.style.display = "none";
      logOut_btn.style.display = "none";
    }
  });

  //profile information
  let profileDetails = JSON.parse(localStorage.getItem("userDetails"));

  let userName = document.querySelector(".userName");
  let userPhone = document.querySelector(".userPhone");
  let userDate = document.querySelector(".userDate");
  let userGender = document.querySelector(".userGender");

  document.querySelector(".userName").innerHTML =
    "Name : " + profileDetails.name;
  document.querySelector(".userPhone").innerHTML =
    "Phone No : " + profileDetails.phoneNo;
  document.querySelector(".userDate").innerHTML =
    "Date: " + profileDetails.date;
  document.querySelector(".userGender").innerHTML =
    "Gender : " + profileDetails.gender;

  // logout details -----------------
  document.querySelector(".logOut_btn").addEventListener("click", () => {
    alert("your account is log out");
    logOut_btn.style.display = "none";
    profile_details.style.display="none"
    localStorage.clear();
    userName.innerHTML = "";
    userPhone.innerHTML = "";
    userDate.innerHTML = "";
    userGender.innerHTML = "";
  });
}

fetchData();
