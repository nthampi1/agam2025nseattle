import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-green-50 text-center p-10 text-yellow-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <img
          src="/images/agam-logo.png"
          alt="AGAM Logo"
          className="mx-auto w-28 mb-4"
        />

        <h1 className="text-3xl font-bold text-yellow-800">
          About Machani & DKollective
        </h1>

        <p>
          We are <strong>Machani</strong>, a community of Malayalee families in Washington,
          and <strong>DKollective</strong>, a collective of culture curators bringing
          premium art and entertainment to the local stage.
        </p>

        <p>
          Our mission is to celebrate the richness of Indian music and create unforgettable
          experiences by collaborating with iconic artists like <strong>AGAM</strong>.
        </p>

        <p>
          Join us in building a vibrant cultural space where tradition meets talent,
          and where memories are made with music!
        </p>

        <footer className="mt-12 text-sm text-yellow-700">
          For inquiries:{" "}
          <a href="mailto:machaniwa@gmail.com" className="underline text-red-500">
            machaniwa@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
}