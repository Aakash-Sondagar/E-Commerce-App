import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-center">
      <div className="w-1/2 flex items-center justify-between">
        <div className=" ">Be in Touch With Me:</div>
        <div className="mail">
          <input
            className="p-3 border-none rounded-l-md"
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button className="p-3 text-white bg-gray-900 rounded-r-md border-none">
            Join Us
          </button>
        </div>
        <div className="flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
