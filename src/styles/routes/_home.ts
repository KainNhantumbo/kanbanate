import styled from 'styled-components';
import { BaseButton } from '../defaults';

export const _home = styled.main`
  position: relative;
  width: 100%;
  position: relative;
  min-height: 50vh;

  * {
    ::selection {
      background: rgba(${({ theme }) => theme.font}, 0.1);
      color: rgb(${({ theme }) => theme.primary_a});
    }
  }

  .tooltip-class {
    border-radius: 8px;
    color: rgb(${({ theme }) => theme.white});
    background: rgba(${({ theme }) => theme.primary_a}, 0.8);
    border: 1px solid rgba(${({ theme }) => theme.white}, 0.9);
    backdrop-filter: blur(20px);
    font-family: 'Inter';
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .tooltip-border-class {
    border-right: 1px solid rgba(${({ theme }) => theme.white}, 0.9);
    border-bottom: 1px solid rgba(${({ theme }) => theme.white}, 0.9);
  }

  .wrapper-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    justify-items: center;
    max-width: 980px;
    align-self: center;
    margin: 0 auto;
    padding-top: 60px;
  }

  article {
    width: 100%;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 620px) {
      padding: 30px 20px;
    }

    .introduction-container {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1 {
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 3.8rem;
        text-align: center;
        width: 100%;
        max-width: 600px;
        align-self: center;
        font-family: 'Zilla Slab', serif;
      }

      p {
        text-align: center;
        font-weight: 500;
        line-height: 1.6rem;
        max-width: 700px;
        margin: 0 auto;
      }

      .action-buttons {
        display: flex;
        flex-flow: row wrap;
        gap: 12px;
        align-self: center;
        justify-content: center;

        button {
          ${BaseButton}
          border-radius: 8px;
          padding: 8px 12px;
        }

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          border-radius: 8px;
          color: rgb(${({ theme }) => theme.font});
          width: fit-content;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 10px 12px;
          overflow: hidden;
          background: rgba(${({ theme }) => theme.primary_a}, 0.2);
          font-weight: 500;
          border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);

          :hover {
            color: rgb(${({ theme }) => theme.primary_a});
          }

          svg {
            width: 20px;
            height: 20px;
            box-shadow: 0 12px 35px rgba(${({ theme }) => theme.black}, 0.5);
            border-radius: 5px;
            background: rgb(${({ theme }) => theme.foreground});
            padding: 2px;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        max-width: 900px;
        object-fit: cover;
        border-radius: 10px;
        margin: 10px auto;
        box-shadow: 0 12px 35px rgba(${({ theme }) => theme.black}, 0.2);
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
      }
    }

    .features-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      user-select: none;
      gap: 25px;

      @media screen and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 670px) {
        grid-template-columns: 1fr;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 15px;
        width: 280px;
        height: 100%;
        border-radius: 10px;
        padding: 20px;
        font-weight: 500;
        background: rgb(${({ theme }) => theme.foreground});
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);

        h3 {
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          font-size: 1rem;
          line-height: 1.2rem;

          svg {
            color: rgb(${({ theme }) => theme.primary_c});
          }
        }

        p {
          font-size: 0.9rem;
          line-height: 1.2rem;
        }
      }
    }

    .identity-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: 50px 0;

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.8rem;
        text-align: center;
        width: 100%;
        max-width: 600px;
        align-self: center;
        font-family: 'Zilla Slab', serif;
        position: relative;

        ::before {
          content: '';
          position: absolute;
          width: 30px;
          height: 5px;
          top: -20px;
          left: calc(50% - 15px);
          border-radius: 12px;
          background: rgb(${({ theme }) => theme.primary_a});
        }
      }

      p {
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1.6rem;
        text-align: center;
      }

      .shields-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin: 0 auto;
        align-self: center;

        a {
          width: fit-content;
          display: grid;
          place-content: center center;
          place-items: center center;
          padding: 8px;
          border-radius: 12px;
          background: rgba(${({ theme }) => theme.primary_c}, 0.2);

          svg {
            width: 22px;
            height: 22px;
          }

          :hover {
            transition: all 200ms ease-in-out;
            svg {
              color: rgb(${({ theme }) => theme.primary_a});
            }
          }
        }
      }
    }

    .call-to-action {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      background: rgb(${({ theme }) => theme.background});
      padding: 12px;
      border-radius: 12px;
      border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);

      h2 {
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 3.8rem;
        text-align: center;
        width: 100%;
        max-width: 600px;
        align-self: center;
        font-family: 'Zilla Slab', serif;
      }

      p {
        line-height: 1.6rem;
        text-align: center;
      }

      img {
        width: 100%;
        height: 100%;
        max-width: 80px;
        max-height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin: 10px auto;
        box-shadow: 0 12px 35px rgba(${({ theme }) => theme.black}, 0.2);
      }

      .action-buttons {
        button {
          ${BaseButton}
          border-radius: 8px;
          padding: 8px 12px;
        }
      }
    }
  }
`;
