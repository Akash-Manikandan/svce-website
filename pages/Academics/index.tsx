import React from "react";
import SideBar from "../../components/SideBar";
import styles from "./Academics.module.scss";
import { FaShip } from "react-icons/fa";
import { IoIosFlask } from "react-icons/io";
import { FcElectronics, FcAutomotive } from "react-icons/fc";
import {
  GiElectric,
  GiMicroscope,
  GiChemicalDrop,
  GiBookmark,
} from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { DiAtom } from "react-icons/di";
import Head from "next/head";
const Academics = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sri Venkateswara College of Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.emptyForAReason}></div>
      <div className={styles.innerContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.departmentC}>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <IoIosFlask />
              </div>
              <div className={styles.content}> Applied Chemistry </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <TbMathSymbols />
              </div>
              <div className={styles.content}> Applied Mathematics </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <DiAtom />
              </div>
              <div className={styles.content}> Applied Physics </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <FcAutomotive />
              </div>
              <div className={styles.content}> Automobile Engineering </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <GiMicroscope />
              </div>
              <div className={styles.content}> Biotechnology </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <GiChemicalDrop />
              </div>
              <div className={styles.content}> Chemical Engineering </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <BiBuildingHouse />
              </div>
              <div className={styles.content}> Civil Engineering </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <RiComputerLine />
              </div>
              <div className={styles.content}>Computer Science Engineering</div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <FcElectronics />
              </div>
              <div className={styles.content}>
                Electrical & Electronics Engineering
              </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <GiElectric />
              </div>
              <div className={styles.content}>
                Electronics & Communication Engineering
              </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <GiBookmark />
              </div>
              <div className={styles.content}>Humanities & Social Sciences</div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <GrCloudComputer />
              </div>
              <div className={styles.content}> Information Technology </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <MdEngineering />
              </div>
              <div className={styles.content}> Mechanical Engineering </div>
            </div>
            <div className={styles.dept}>
              <div className={styles.icon}>
                <FaShip />
              </div>
              <div className={styles.content}> Marine Engineering </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
