import { TfiClose } from "react-icons/tfi";
import portfoliosData from "../../Data/ProtfolioData";
import useModalContext from "../../contexts/useModalContext";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function ModalContent() {
  const { openModal, handleModal, setOpenModal } = useModalContext();
  const data = portfoliosData.find((data) => data.id === openModal);
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        transform: "translateY(-100px)",
        duration: 0.6,
      });
      
    },
    { dependencies: [openModal] },
  );
  return (
    <div
      onClick={handleModal}
      className="modal fixed left-0 top-0 z-50 flex h-full w-full justify-center  bg-backgroundColorSecondary/95 text-white max-lg:p-10 max-md:h-[110vh] lg:items-center "
    >
      <div
        ref={ref}
        className="relative border-borderColor  lg:border lg:p-14 "
      >
        <div>
          <p className="text-[16px] text-themeDarkshade">Project Tags</p>
          <h1 className=" my-5 text-[20px] font-normal text-themeWhite lg:text-4xl">
            {data.name}
          </h1>
          <h2 className=" my-5 text-subtitleColor">Techs JS React</h2>
        </div>
        <div className=" max-w-[700px] ">
          <img className=" rounded-lg" src={data.image} width={6000} alt="" />
        </div>
        <div>
          <p className="mt-5 max-h-[350px] max-w-[700px] overflow-auto pb-7 text-lg text-themeDarkshade lg:max-h-[200px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolorem temporibus fugit commodi maiores dicta dignissimos incidunt!
            Ea, eligendi reiciendis? Soluta, similique qui, voluptate dolorem
            nemo optio eligendi at dolor quam iste architecto! Cum voluptate
            laboriosam eos quis facilis! Fugiat voluptatum facilis assumenda!
            Ratione voluptate fugit, commodi earum fuga maiores eveniet veniam
            aperiam quo delectus error quae non quia maxime. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. In, facilis esse consequatur
            nobis maxime, voluptates eligendi fuga dicta, velit voluptatem quia
            accusamus. Eaque quam ex similique perspiciatis, enim atque
            asperiores sed cumque molestias? Quaerat dignissimos dolores, iusto
            voluptate error expedita incidunt ad voluptas itaque, placeat
            nesciunt commodi maxime, laboriosam tempora architecto magni
            molestias consequuntur nam quis ipsum tenetur vel cumque optio.
            Quos, aut beatae repellat distinctio, laboriosam labore vero sequi
            reprehenderit dicta impedit nostrum quo culpa laborum saepe illum
            deserunt optio modi voluptatibus eos molestias, ducimus harum
            obcaecati? Quas libero ad numquam fugit voluptates, iste, voluptatum
            autem adipisci dolorum corrupti suscipit voluptatibus dolorem, eum
            sint consequuntur illum recusandae? Quos tenetur eveniet odio
            voluptas? Cumque recusandae obcaecati similique maxime! Commodi nisi
            eveniet illum esse voluptas. Consectetur earum vel consequatur
            assumenda molestiae. Numquam nam tempore, quaerat natus eos fuga
            velit dignissimos, rerum quas optio repellendus necessitatibus cum,
            veniam soluta vel temporibus commodi est consequatur quo illum modi
            at tenetur labore sint. Temporibus cupiditate laborum non aspernatur
            perspiciatis mollitia dolores rerum, at quae quia dolore explicabo
            beatae sed maiores id debitis. Vero veritatis nihil dolore totam
            explicabo ullam harum reprehenderit aspernatur, quas quidem
            architecto ab nisi, repellendus ducimus minus repellat nobis quia.
          </p>
        </div>
        <div
          onClick={() => setOpenModal(null)}
          className=" group absolute right-[40px] top-[50px] flex h-10 w-10 cursor-pointer items-center justify-center border-subtitleColor hover:border max-lg:right-0 max-lg:top-0 "
        >
          <div className="  cursor-pointer text-4xl text-themeDarkshade transition-all duration-300 ease-in-out group-hover:text-xl group-hover:text-subtitleColor  ">
            <TfiClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
