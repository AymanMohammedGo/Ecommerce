import "../../styles/ScrollUp.css";
window.onscroll = function () {
  if (window.scrollY >= 600) {
    document.getElementById("id1").style.display = "block";
    //document.getElementById("id2").style.display = "block";
  } else {
    document.getElementById("id1").style.display = "none";
  }
};
const ScrollUp = () => {
  return (
    <>
      <div className="scrollUp">
        <button
          className="up"
          id="id1"
          onClick={function () {
            window.scrollTo({
              right: 0,
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <i class="ri-arrow-up-s-line"></i>
        </button>
        {/* <button
          className="down"
          id="id2"
          onClick={function () {
            window.scrollTo({
              right: 0,
              top: 6000,
              behavior: "smooth",
            });
          }}
        >
          <i class="ri-arrow-up-s-line"></i>
        </button> */}
      </div>
    </>
  );
};

export default ScrollUp;
