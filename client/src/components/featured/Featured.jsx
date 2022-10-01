import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Cala Angulia,Bransgore,Kavouison"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/693535.webp?k=39f09e1a64b76dc38b82fae5e51dd9728a68c06b8a0a26c2e6254a80eb792e72&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cala Angulia</h1>
              <h2>103 properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/810971.webp?k=34cb40f6b8444cb6f23969737d2c6a3d91b31bba1f8aa9ccf79bdc807d9b1dd1&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bransgore</h1>
              <h2>88 properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/879406.webp?k=dd541d1e78f3b12096d858880a21807954f88849a62946cca580a95ae81c99fb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kavouison</h1>
              <h2>315 properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
