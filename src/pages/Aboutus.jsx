// // //
import Uploader from "../data/Uploader";

export default function Aboutus() {
  return (
    <>
      <div className="flex justify-center items-center mt-40!">
        <div className="bg-[var(--color-grey-200)] rounded-2xl shadow shadow-gray-400 w-fit p-10! text-3xl">
          <p className="leading-relaxed mb-16!">
            All the credits go to my teacher,{" "}
            <span>
              <a
                href="https://jonas.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500! font-bold border-b-2"
              >
                Jonas Schmedtmann
              </a>
            </span>
            <br />I simply made it fully responsive, added extra features, and
            crafted a creative UI with my own touch
          </p>

          <p className="leading-relaxed">
            Who am I? Come see me 👉{" "}
            <a
              href="https://github.com/pH0enix46"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500! font-bold border-b-2"
            >
              pH0enix46
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10!">
        <Uploader />
      </div>
    </>
  );
}
