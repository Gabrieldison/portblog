"use client";
import { useState, useEffect } from "react";
import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";

export default function SliceSimulatorPage() {
  const [slices, setSlices] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const fetchedPost = await client.getAllByType("posts");

        setSlices(fetchedPost);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SliceSimulator
      sliceZone={(props) => (
        <SliceZone {...props} components={components} slices={slices.slices} />
      )}
    />
  );
}
