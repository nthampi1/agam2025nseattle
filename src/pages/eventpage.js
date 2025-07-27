import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/input";
import Countdown from "react-countdown";
import { PartyPopperIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [email, setEmail] = useState("");

  const handleRSVP = () => {
    alert(`Thanks for your RSVP: ${email}`);
    setEmail("");
  };

  const eventDate = new Date("2025-08-24T18:00:00");
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-yellow-100" style={{ backgroundColor: '#d1fae5' }} >
      <style>{`
        .glow:hover {
          box-shadow: 0 0 10px #facc15, 0 0 20px #facc15;
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>

      <div className="relative z-10 px-4 py-10 max-w-6xl mx-auto space-y-10 text-center">
        <img
          src="/images/agam-logo.png"
          alt="AGAM Logo"
          className="mx-auto w-32 mb-4"
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-yellow-300"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          AGAM in Seattle – Aug 24, 2025
        </motion.h1>

        <motion.p
          className="text-lg max-w-3xl mx-auto bg-green-200 bg-opacity-70 p-4 rounded text-yellow-900"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          After a break, they are in Seattle to take us all through a journey of Carnatic ragas blending with effervescent rock riffs. 🎸 This time, they’re back with their latest album – <b>Arrival of the Ethereal</b>, 8 years in the making!
        </motion.p>

        <motion.div
          className="text-xl font-medium text-red-400"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <PartyPopperIcon className="inline w-6 h-6" />{" "}
          <Countdown
            date={eventDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <span>
                Countdown: {days}d {hours}h {minutes}m {seconds}s
              </span>
            )}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={3}>
            <Card>
              <CardContent className="p-6 text-left bg-green-200 bg-opacity-60 rounded text-yellow-900">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-200">🎫 Ticket & Booth Info</h2>
                <p>Reserve booth seating for up to 5 with a complimentary drink. Booth reservations go live at <b>9 AM, July 24</b>.</p>
                <a
                  href="https://www.dkollective.com"
                  className="text-red-400 underline mt-2 inline-block glow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tickets
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={4}>
            <Card>
              <CardContent className="p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-200">📍 Venue & Date</h2>
                <p><MapPinIcon className="inline w-5 h-5" /> MIRRA, Bellevue</p>
                <p><ClockIcon className="inline w-5 h-5" /> August 24, 2025 – 6:00 PM onwards</p>
                <a
                  href="https://www.visitmirra.com/"
                  className="text-red-400 underline mt-2 inline-block glow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Venue
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={5}>
            <Card>
              <CardContent className="p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-200">📷 Event Gallery</h2>
                <p>Photos, reels, and live updates of AGAM’s journey and event will be added here. Stay tuned!</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={6}>
            <Card>
              <CardContent className="p-6 text-left">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-200">🎉 Raffle & Sponsorship</h2>
                <p>Win cool prizes & support this celebration of music. Sponsorship opportunities are open!</p>
                <a
                  href="mailto:machaniwa@gmail.com"
                  className="text-red-400 underline mt-2 inline-block glow"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div className="mt-12 max-w-md mx-auto" variants={fadeIn} initial="hidden" animate="visible" custom={7}>
          <h2 className="text-xl font-semibold mb-2 text-yellow-200">📩 RSVP to Stay in the Loop</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="glow" onClick={handleRSVP}>RSVP</Button>
          </div>
        </motion.div>

        <footer className="mt-16 text-sm text-yellow-900 bg-green-200 bg-opacity-60 p-4 rounded">
          © 2025 Machani & DKollective | Domain: <b>agam2025nseattle.com</b>
        </footer>
      </div>
    </div>
  );
}
