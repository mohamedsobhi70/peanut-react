import "./style.css";

function Account() {
  return (
    <main className="my-3">
      <div className="container">
        <h2 className="fs-40 text-capitalize fw-900 text-primary-color mb-3">
          Hello <span className="user-name small text-error-color"></span>
        </h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="bg-white p-3 border-20">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Setting
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled ms-2 fw-600 ">
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center  text-secondary-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="18"
                                height="21"
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.7522 20.3157V20.4657H15.9022H16.8889H16.8981H17.0481V20.3157V15.886C17.0481 13.9076 15.4214 12.2948 13.4308 12.2948H4.52283C2.5322 12.2948 0.905542 13.9076 0.905542 15.886V20.3157V20.4657H1.05554H2.05147H2.20147V20.3157V15.886C2.20147 14.6154 3.23982 13.5833 4.52283 13.5833H13.4308C14.7138 13.5833 15.7522 14.6154 15.7522 15.886V20.3157Z"
                                  fill="#f7ab4b"
                                />
                                <path
                                  d="M3.38625 6.08411C3.38625 9.14247 5.89818 11.6339 8.97695 11.6339C12.0557 11.6339 14.5676 9.14247 14.5676 6.08411C14.5676 3.02574 12.0557 0.534326 8.97695 0.534326C5.89818 0.534326 3.38625 3.02574 3.38625 6.08411ZM4.67296 6.07496C4.67296 3.72439 6.6058 1.80446 8.97695 1.80446C11.3481 1.80446 13.2809 3.72439 13.2809 6.07496C13.2809 8.42553 11.3481 10.3455 8.97695 10.3455C6.6058 10.3455 4.67296 8.42553 4.67296 6.07496Z"
                                  fill="#f7ab4b"
                                />
                              </svg>
                            </span>
                            <span className="ms-2">Personal Infromation</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color "
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_6031)">
                                  <path
                                    d="M10.73 21.465C4.81 21.465 0 16.655 0 10.735C0 4.81497 4.81 0.00497437 10.73 0.00497437C16.65 0.00497437 21.46 4.81497 21.46 10.735C21.46 16.655 16.65 21.465 10.73 21.465ZM10.73 1.07497C5.4 1.07497 1.07 5.40497 1.07 10.735C1.07 16.065 5.4 20.395 10.73 20.395C16.06 20.395 20.39 16.065 20.39 10.735C20.39 5.40497 16.06 1.07497 10.73 1.07497Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.9797 18.815C12.9197 18.815 12.8697 18.805 12.8097 18.795C12.1497 18.655 12.0297 17.885 11.8797 16.925C11.7397 16.045 11.5497 14.845 10.9497 14.605C9.94972 14.205 9.38972 13.715 9.21972 13.095C8.99972 12.285 9.52972 11.545 9.99972 10.945C9.74972 10.885 9.43972 10.825 9.15972 10.775C7.73972 10.505 5.80972 10.145 4.55972 9.05497C4.09972 8.65497 3.85972 8.19497 3.82972 7.67497C3.75972 6.54497 4.73972 5.46497 5.52972 4.59497C5.80972 4.28497 6.18972 3.86497 6.28972 3.65497C6.13972 3.54497 5.64972 3.31497 4.42972 3.22497L4.50972 2.15497C6.17972 2.28497 7.07972 2.65497 7.32972 3.32497C7.55972 3.93497 7.03972 4.51497 6.31972 5.31497C5.69972 5.99497 4.85972 6.92497 4.89972 7.61497C4.90972 7.75497 4.94972 7.98497 5.25972 8.24497C6.28972 9.14497 8.05972 9.47497 9.35972 9.72497C9.42972 9.73497 9.49972 9.74497 9.56972 9.76497C9.52972 9.67497 9.49972 9.57497 9.47972 9.47497C9.27972 8.35497 10.9497 7.42497 12.8797 6.35497C13.8197 5.82497 14.7997 5.28497 15.1797 4.88497C16.0797 3.94497 16.1197 3.42497 15.7897 2.35497L16.8097 2.03497C17.2197 3.35497 17.1997 4.31497 15.9497 5.62497C15.4597 6.13497 14.4597 6.69497 13.3997 7.28497C12.4197 7.83497 10.5897 8.85497 10.5397 9.29497C10.5497 9.29497 10.7797 9.61497 12.3697 9.86497C13.1697 9.99497 17.1697 10.725 17.8297 12.675C18.5997 14.985 17.2997 15.615 16.2497 16.125C15.6797 16.405 15.0897 16.685 14.7297 17.225C14.0797 18.205 13.5497 18.815 12.9797 18.815ZM11.3097 10.755C11.3097 10.905 11.2597 11.055 11.1597 11.195C11.0797 11.305 10.9997 11.415 10.9097 11.525C10.5597 11.975 10.1597 12.495 10.2497 12.825C10.3197 13.085 10.7097 13.365 11.3397 13.615C12.4997 14.075 12.7397 15.565 12.9297 16.755C12.9697 17.025 13.0297 17.365 13.0897 17.595C13.2297 17.445 13.4697 17.165 13.8197 16.635C14.3397 15.845 15.0997 15.475 15.7697 15.155C16.7997 14.655 17.2797 14.425 16.7997 13.015C16.5297 12.205 14.5497 11.305 12.1897 10.925C11.8697 10.875 11.5697 10.815 11.3097 10.755Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_6031">
                                    <rect
                                      width="21.46"
                                      height="21.46"
                                      fill="white"
                                      transform="translate(0 0.00497437)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">Language </span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_6044)">
                                  <path
                                    d="M13.4441 0.982483C8.35175 0.982483 4.20898 5.12525 4.20898 10.2176C4.20898 11.894 4.96083 13.6971 4.99234 13.7731C5.23517 14.3495 5.71431 15.2448 6.05981 15.7695L12.3918 25.3637C12.651 25.757 13.0345 25.9825 13.4441 25.9825C13.8537 25.9825 14.2372 25.757 14.4964 25.3643L20.8289 15.7695C21.175 15.2448 21.6536 14.3495 21.8964 13.7731C21.9279 13.6976 22.6792 11.8946 22.6792 10.2176C22.6792 5.12525 18.5365 0.982483 13.4441 0.982483ZM20.8947 13.3516C20.6779 13.8682 20.2319 14.701 19.9217 15.1714L13.5891 24.7662C13.4642 24.9558 13.4245 24.9558 13.2996 24.7662L6.96702 15.1714C6.65683 14.701 6.21083 13.8676 5.99408 13.351C5.98484 13.3287 5.29547 11.6691 5.29547 10.2176C5.29547 5.72444 8.95095 2.06897 13.4441 2.06897C17.9373 2.06897 21.5927 5.72444 21.5927 10.2176C21.5927 11.6713 20.9017 13.3353 20.8947 13.3516Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M13.4439 5.32896C10.7478 5.32896 8.55469 7.52257 8.55469 10.2181C8.55469 12.9137 10.7478 15.1073 13.4439 15.1073C16.14 15.1073 18.333 12.9137 18.333 10.2181C18.333 7.52257 16.14 5.32896 13.4439 5.32896ZM13.4439 14.0208C11.3475 14.0208 9.64117 12.3151 9.64117 10.2181C9.64117 8.12123 11.3475 6.41545 13.4439 6.41545C15.5402 6.41545 17.2466 8.12123 17.2466 10.2181C17.2466 12.3151 15.5402 14.0208 13.4439 14.0208Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_6044">
                                    <rect
                                      width="25"
                                      height="25"
                                      fill="white"
                                      transform="translate(0.943359 0.982483)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>

                            <span className="ms-2">Addresses </span>
                          </a>
                        </li>

                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="22"
                                height="18"
                                viewBox="0 0 22 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_5996)">
                                  <path
                                    d="M17.61 17.545H3.74C1.68 17.545 0 15.865 0 13.805V4.20497C0 2.14497 1.68 0.464966 3.74 0.464966H17.62C19.68 0.464966 21.36 2.14497 21.36 4.20497V13.815C21.35 15.865 19.67 17.545 17.61 17.545ZM3.74 1.53497C2.27 1.53497 1.07 2.73497 1.07 4.20497V13.815C1.07 15.285 2.27 16.485 3.74 16.485H17.62C19.09 16.485 20.29 15.285 20.29 13.815V4.20497C20.29 2.73497 19.09 1.53497 17.62 1.53497H3.74Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M10.6798 13.805C9.20977 13.805 8.00977 12.605 8.00977 11.135H9.07977C9.07977 12.015 9.79977 12.735 10.6798 12.735C11.5598 12.735 12.2798 12.015 12.2798 11.135C12.2798 10.485 11.5998 10.185 10.4898 9.76497C9.37977 9.35497 8.00977 8.84497 8.00977 7.40497C8.00977 5.93497 9.20977 4.73497 10.6798 4.73497C12.1498 4.73497 13.3498 5.93497 13.3498 7.40497H12.2798C12.2798 6.52497 11.5598 5.80497 10.6798 5.80497C9.79977 5.80497 9.07977 6.52497 9.07977 7.40497C9.07977 8.05497 9.75977 8.35497 10.8698 8.77497C11.9798 9.18497 13.3498 9.70497 13.3498 11.145C13.3398 12.615 12.1498 13.805 10.6798 13.805Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M11.2106 3.66497H10.1406V14.345H11.2106V3.66497Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_5996">
                                    <rect
                                      width="21.35"
                                      height="17.08"
                                      fill="white"
                                      transform="translate(0 0.464966)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">Currency</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="18"
                                height="22"
                                viewBox="0 0 18 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_6005)">
                                  <path
                                    d="M13.42 21.925H3.76C1.69 21.925 0 20.245 0 18.175V10.665C0 10.365 0.24 10.125 0.54 10.125H16.64C16.94 10.125 17.18 10.365 17.18 10.665V18.175C17.17 20.245 15.49 21.925 13.42 21.925ZM1.07 11.195V18.175C1.07 19.655 2.27 20.855 3.75 20.855H13.41C14.89 20.855 16.09 19.655 16.09 18.175V11.195H1.07Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M15.0304 10.665H13.9604V6.90497C13.9604 3.94497 11.5504 1.53497 8.59039 1.53497C5.63039 1.53497 3.22039 3.94497 3.22039 6.90497V10.665H2.15039V6.90497C2.15039 3.35497 5.04039 0.464966 8.59039 0.464966C12.1404 0.464966 15.0304 3.35497 15.0304 6.90497V10.665Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_6005">
                                    <rect
                                      width="17.17"
                                      height="21.46"
                                      fill="white"
                                      transform="translate(0 0.464966)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">Change password</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      General
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled ms-2 fw-600 ">
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center  text-secondary-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.68 21.885C4.79 21.885 0 17.095 0 11.215C0 5.335 4.79 0.535004 10.68 0.535004C16.57 0.535004 21.36 5.325 21.36 11.215C21.36 17.105 16.56 21.885 10.68 21.885ZM10.68 1.605C5.38 1.605 1.07 5.915 1.07 11.215C1.07 16.515 5.38 20.825 10.68 20.825C15.98 20.825 20.29 16.515 20.29 11.215C20.29 5.915 15.97 1.605 10.68 1.605Z"
                                  fill="#F7AB4B"
                                />
                                <path
                                  d="M11.2106 9.075H10.1406V17.615H11.2106V9.075Z"
                                  fill="#F7AB4B"
                                />
                                <path
                                  d="M11.7494 4.805H9.60938V6.945H11.7494V4.805Z"
                                  fill="#F7AB4B"
                                />
                              </svg>
                            </span>
                            <span className="ms-2">About us</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color "
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_6031)">
                                  <path
                                    d="M10.73 21.465C4.81 21.465 0 16.655 0 10.735C0 4.81497 4.81 0.00497437 10.73 0.00497437C16.65 0.00497437 21.46 4.81497 21.46 10.735C21.46 16.655 16.65 21.465 10.73 21.465ZM10.73 1.07497C5.4 1.07497 1.07 5.40497 1.07 10.735C1.07 16.065 5.4 20.395 10.73 20.395C16.06 20.395 20.39 16.065 20.39 10.735C20.39 5.40497 16.06 1.07497 10.73 1.07497Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.9797 18.815C12.9197 18.815 12.8697 18.805 12.8097 18.795C12.1497 18.655 12.0297 17.885 11.8797 16.925C11.7397 16.045 11.5497 14.845 10.9497 14.605C9.94972 14.205 9.38972 13.715 9.21972 13.095C8.99972 12.285 9.52972 11.545 9.99972 10.945C9.74972 10.885 9.43972 10.825 9.15972 10.775C7.73972 10.505 5.80972 10.145 4.55972 9.05497C4.09972 8.65497 3.85972 8.19497 3.82972 7.67497C3.75972 6.54497 4.73972 5.46497 5.52972 4.59497C5.80972 4.28497 6.18972 3.86497 6.28972 3.65497C6.13972 3.54497 5.64972 3.31497 4.42972 3.22497L4.50972 2.15497C6.17972 2.28497 7.07972 2.65497 7.32972 3.32497C7.55972 3.93497 7.03972 4.51497 6.31972 5.31497C5.69972 5.99497 4.85972 6.92497 4.89972 7.61497C4.90972 7.75497 4.94972 7.98497 5.25972 8.24497C6.28972 9.14497 8.05972 9.47497 9.35972 9.72497C9.42972 9.73497 9.49972 9.74497 9.56972 9.76497C9.52972 9.67497 9.49972 9.57497 9.47972 9.47497C9.27972 8.35497 10.9497 7.42497 12.8797 6.35497C13.8197 5.82497 14.7997 5.28497 15.1797 4.88497C16.0797 3.94497 16.1197 3.42497 15.7897 2.35497L16.8097 2.03497C17.2197 3.35497 17.1997 4.31497 15.9497 5.62497C15.4597 6.13497 14.4597 6.69497 13.3997 7.28497C12.4197 7.83497 10.5897 8.85497 10.5397 9.29497C10.5497 9.29497 10.7797 9.61497 12.3697 9.86497C13.1697 9.99497 17.1697 10.725 17.8297 12.675C18.5997 14.985 17.2997 15.615 16.2497 16.125C15.6797 16.405 15.0897 16.685 14.7297 17.225C14.0797 18.205 13.5497 18.815 12.9797 18.815ZM11.3097 10.755C11.3097 10.905 11.2597 11.055 11.1597 11.195C11.0797 11.305 10.9997 11.415 10.9097 11.525C10.5597 11.975 10.1597 12.495 10.2497 12.825C10.3197 13.085 10.7097 13.365 11.3397 13.615C12.4997 14.075 12.7397 15.565 12.9297 16.755C12.9697 17.025 13.0297 17.365 13.0897 17.595C13.2297 17.445 13.4697 17.165 13.8197 16.635C14.3397 15.845 15.0997 15.475 15.7697 15.155C16.7997 14.655 17.2797 14.425 16.7997 13.015C16.5297 12.205 14.5497 11.305 12.1897 10.925C11.8697 10.875 11.5697 10.815 11.3097 10.755Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_6031">
                                    <rect
                                      width="21.46"
                                      height="21.46"
                                      fill="white"
                                      transform="translate(0 0.00497437)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">How it works? </span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="18"
                                height="22"
                                viewBox="0 0 18 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.54 21.905L8.42 21.875C8.33 21.855 0 19.805 0 12.275V2.135H1.07V12.275C1.07 18.495 7.57 20.525 8.54 20.795C9.56 20.525 16.01 18.555 16.01 12.275V2.135H17.08V12.275C17.08 19.795 8.75 21.845 8.66 21.865L8.54 21.905Z"
                                  fill="#364456"
                                />
                                <path
                                  d="M6.94 2.675H0V1.605H6.94C7.53 1.605 8.01 1.125 8.01 0.535004H9.08C9.07 1.715 8.12 2.675 6.94 2.675Z"
                                  fill="#364456"
                                />
                                <path
                                  d="M17.0798 2.675H10.1398C8.95977 2.675 8.00977 1.715 8.00977 0.535004H9.07977C9.07977 1.125 9.55977 1.605 10.1498 1.605H17.0898V2.675H17.0798Z"
                                  fill="#364456"
                                />
                                <path
                                  d="M12.8095 10.145H4.26953V11.215H12.8095V10.145Z"
                                  fill="#364456"
                                />
                                <path
                                  d="M9.07977 6.40501H8.00977V14.945H9.07977V6.40501Z"
                                  fill="#364456"
                                />
                              </svg>
                            </span>

                            <span className="ms-2">Charity</span>
                          </a>
                        </li>

                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="18"
                                height="22"
                                viewBox="0 0 18 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_5226)">
                                  <path
                                    d="M1.6 11.215H0V10.145H1.07V5.87503H0V4.80503H1.6C1.9 4.80503 2.13 5.04503 2.13 5.33503V10.675C2.14 10.975 1.9 11.215 1.6 11.215Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M13.34 21.885H3.74C1.68 21.885 0 20.205 0 18.145V10.675H1.07V18.145C1.07 19.615 2.27 20.815 3.74 20.815H13.35C14.82 20.815 16.02 19.615 16.02 18.145V4.49503L13.13 1.60503H3.74C2.27 1.60503 1.07 2.80503 1.07 4.27503V5.33503H0V4.27503C0 2.21503 1.68 0.535034 3.74 0.535034H13.35C13.49 0.535034 13.63 0.595034 13.73 0.695034L16.93 3.89503C17.03 3.99503 17.09 4.13503 17.09 4.27503V18.155C17.08 20.205 15.4 21.885 13.34 21.885Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.8095 9.07503H4.26953V10.145H12.8095V9.07503Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.8095 5.87503H4.26953V6.94503H12.8095V5.87503Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.8095 15.485H4.26953V16.555H12.8095V15.485Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M12.8095 12.275H4.26953V13.345H12.8095V12.275Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_5226">
                                    <rect
                                      width="17.08"
                                      height="21.35"
                                      fill="white"
                                      transform="translate(0 0.535034)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">Our products</span>
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="#"
                            className="text-decoration-none fs-14 d-flex align-items-center text-text-color"
                          >
                            <span
                              className="d-inline-flex justify-content-center align-items-center"
                              style={{ width: " 30px" }}
                            >
                              <svg
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_633_5243)">
                                  <path
                                    d="M9.61 20.815C4.31 20.815 0 16.505 0 11.205H1.07C1.07 15.915 4.9 19.745 9.61 19.745C14.32 19.745 18.15 15.915 18.15 11.205H19.22C19.22 16.505 14.91 20.815 9.61 20.815Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M10.1403 5.33504H9.07031V21.885H10.1403V5.33504Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M3.2 10.675H0V11.745H3.2V10.675Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M19.2098 10.675H16.0098V11.745H19.2098V10.675Z"
                                    fill="#364456"
                                  />
                                  <path
                                    d="M9.60945 5.87503C8.13945 5.87503 6.93945 4.67503 6.93945 3.20503C6.93945 1.73503 8.13945 0.535034 9.60945 0.535034C11.0795 0.535034 12.2795 1.73503 12.2795 3.20503C12.2795 4.67503 11.0795 5.87503 9.60945 5.87503ZM9.60945 1.60503C8.72945 1.60503 8.00945 2.32503 8.00945 3.20503C8.00945 4.08503 8.72945 4.80503 9.60945 4.80503C10.4895 4.80503 11.2095 4.08503 11.2095 3.20503C11.2095 2.32503 10.4895 1.60503 9.60945 1.60503Z"
                                    fill="#364456"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_633_5243">
                                    <rect
                                      width="19.22"
                                      height="21.35"
                                      fill="white"
                                      transform="translate(0 0.535034)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="ms-2">Our partners</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Privacy Policy
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div className="accordion-body">privacy </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="bg-white  p-5 h-100 border-20">
              <h5 className="fs-24 mb-3 fw-900 text-text-color">
                About peanuts
              </h5>
              <p className="fw-600 fs-16 text-text-color lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                corrupti? Neque provident amet explicabo accusamus nobis unde
                sit corrupti obcaecati vel sapiente! Iste natus voluptatum ipsum
                blanditiis, quisquam quae quibusdam at possimus, ducimus nulla
                dolorum fugiat nihil necessitatibus, maxime dicta alias sequi
                explicabo magnam fugit sed? Esse odio deleniti veritatis dolorem
                repudiandae nesciunt nobis blanditiis neque! Nulla rerum ex
                voluptatum incidunt dolores fugiat quod consectetur eveniet
                repellat optio non alias ab, itaque illum facere sequi
                cupiditate. Consectetur consequatur saepe nemo est ipsa, eum
                qui, incidunt unde ea laborum facilis modi dignissimos ipsam
                necessitatibus eos, error animi quaerat. Laboriosam perferendis,
                dolor accusantium vero cum perspiciatis voluptatum quam, animi
                ipsum quibusdam qui tempora esse magni doloribus architecto
                asperiores nesciunt itaque repudiandae! Voluptas totam magnam,
                repudiandae minima nobis repellendus ab reprehenderit facere
                saepe consectetur voluptatem voluptatibus, cupiditate cum illo.
                Veniam consectetur enim culpa ipsam voluptatem perspiciatis
                deserunt repellat id aliquam cupiditate optio nulla expedita
                maiores ab, aspernatur{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;
