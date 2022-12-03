import { createContext, useEffect, useState, useContext, Children } from "react";
import { useRouter } from "next/router";

const DarkContext = createContext();

export default DarkContext