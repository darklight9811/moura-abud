import { FaFacebook, FaGoogle, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa"

export const getApps = () => [
	{
		name: "google",
		Icon: FaGoogle,
		color: "yellow",
	},
	{
		name: "facebook",
		Icon: FaFacebook,
		color: "blue",
		font: "white",
	},
	{
		name: "youtube",
		Icon: FaYoutube,
		color: "red",
		font: "white",
	},
	{
		name: "linkedin",
		Icon: FaLinkedin,
		color: "blue",
		font: "white",
	},
	{
		name: "spotify",
		Icon: FaSpotify,
		color: "green",
	},
]