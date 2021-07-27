import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div
        className="
        bg-gray-100
        dark:bg-gray-800
        lg:bg-schaap-500
        grid
        lg:grid-cols-2
        2xl:grid-cols-4
        h-screen
      "
      >
        <div
          className="
          w-full
          mx-auto
          flex
          items-center
          sm:max-w-xl
          lg:px-12
          lg:py-24
          lg:max-w-full
          xl:mr-0
          2xl:col-span-2
        "
        >
          <div className="mt-0 mr-0 mb-0 ml-auto xl:w-6/12">
            <div className="relative max-w-xl min-h-full m-auto h-44 mt-4 lg:hidden">
              <div
                className="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
                w-10/12
              "
              >
                <img
                  className=""
                  src={logo}
                  alt="Logo en huisstyle website Fred Schaap"
                />
                <h4
                  className="
                  mt-2
                  text-xl text-center
                  font-roboto font-bold
                  text-schaap-800
                  dark:text-gray-100
                  lg:text-2xl
                  xl:text-3xl
                "
                >
                  Fred Schaap
                  <span className="text-schaap-600 dark:text-gray-100 font-light">
                    Dienstverlening
                  </span>
                </h4>
              </div>
            </div>
            <div className="relative bg-schaap-500 pt-1 pb-1">
              <div className="custom-shape-divider-top lg:hidden">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="fill-current text-gray-100 dark:text-gray-800"
                  ></path>
                </svg>
              </div>
              <div className="relative ml-12 mb-32 sm:mr-12 md:mr-0">
                <h1
                  className="
                  mt-6
                  text-3xl
                  font-roboto font-bold
                  text-schaap-800
                  dark:text-gray-100
                  sm:mt-8
                  lg:text-3xl
                  xl:text-4xl
                "
                >
                  Fred Schaap
                </h1>
                <h2
                  className="
                  mt-1
                  text-xl
                  font-roboto
                  text-schaap-800
                  dark:text-gray-100
                  sm:mt-1
                  lg:text-1xl
                  xl:text-2xl
                "
                >
                  Dienstverlening
                </h2>
                <p
                  className="
                  mt-8
                  text-schaap-900
                  font-poppins font-extralight
                  sm:mt-4
                  sm:text-xl
                "
                >
                  Johannes Vermeerstraat 28
                  <br />
                  1382 AT Weesp
                </p>
                <p
                  className="
                  text-schaap-900
                  font-poppins font-extralight
                  sm:mt-4
                  sm:text-xl
                "
                >
                  <span className="relative inline-block top-1.5">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                      ></path>
                    </svg>{" "}
                  </span>
                  <a href="tel:+31615050976">+31 6 15 05 09 76</a>
                  <br />
                  <span className="relative inline-block top-1.5">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5.5 6.5L12 12.25L18.5 6.5"
                      ></path>
                    </svg>
                  </span>
                  <a
                    href="mailto:info@fredschaap.nl"
                    title="Mail met Fred Schaap"
                  >
                    info@fredschaap.nl
                  </a>
                  <br />
                  <span className="relative inline-block top-1.5">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="7.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        fill="#fff"
                      ></circle>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 12H12H19"
                      ></path>
                    </svg>
                  </span>
                  <a href="https://fredschaap.nl">fredschaap.nl</a>
                </p>
                <div className="mt-4 space-x-1 sm:mt-6">
                  <a
                    className="
                    btn btn-primary
                    bg-schaap-800
                    text-gray-100
                    hover:bg-schaap-700
                    focus:outline-none
                    focus:ring-2 focus:ring-schaap-800 focus:ring-opacity-100
                    font-roboto
                    shadow-lg
                    transform
                    transition
                    hover:-translate-y-0.5
                    dark:bg-gray-100
                    dark:text-gray-800
                    dark:hover:bg-gray-800
                    dark:hover:text-gray-100
                  "
                    href="mailto:info@fredschaap.nl"
                    title="Mail met Fred Schaap"
                  >
                    Contact met Fred
                  </a>
                </div>
                <div className="relative flex flex-wrap mt-4">
                  <div className="tags" title="vlonders">
                    vlonders
                  </div>
                  <div className="tags" title="aanbouw">
                    aanbouw
                  </div>
                  <div className="tags" title="schuurtjes">
                    schuurtjes
                  </div>
                  <div className="tags" title="tuinen">
                    tuinen
                  </div>
                  <div className="tags" title="terras">
                    terras
                  </div>
                  <div className="tags" title="bestrating">
                    bestrating
                  </div>
                  <div className="tags" title="beschoeiingen">
                    beschoeiingen
                  </div>
                  <div className="tags" title="damwanden">
                    damwanden
                  </div>
                  <div className="tags" title="waterkanten">
                    waterkanten
                  </div>
                  <div className="tags" title="tuinsteigers">
                    tuinsteigers
                  </div>
                  <div className="tags" title="opschot">
                    opschot
                  </div>
                  <div className="tags" title="tuinmeubilair">
                    tuinmeubilair
                  </div>
                  <div className="tags" title="tuinverlichting">
                    tuinverlichting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
          bg-gray-100
          dark:bg-gray-800
          hidden
          relative
          lg:block
          2xl:col-span-2
        "
        >
          <div
            className="
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
            w-8/12
          "
          >
            <img
              className=""
              src={logo}
              alt="Logo en huisstyle website Fred Schaap"
            />
            <h1
              className="
              mt-2
              text-center text-2xl
              font-roboto font-bold
              text-schaap-700
              dark:text-gray-100
              sm:text-4xl
              lg:text-2xl
              xl:text-3xl
            "
            >
              Fred Schaap
              <span className="text-schaap-500 dark:text-gray-100 font-light">
                Dienstverlening
              </span>
            </h1>
          </div>
          <svg
            className="absolute inset-0 h-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            preserveAspectRatio="none"
          >
            <path
              fill="#4eb850"
              d="M0 0v1024h759.5S36.1 886.07 8.31 465.32C-2.47 302.13 93.94 139.24 216 .97"
            />
          </svg>
        </div>
      </div>
  );
}

export default App;
