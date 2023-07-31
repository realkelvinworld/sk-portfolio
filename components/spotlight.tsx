"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex flex-col">
      <div
        className="group relative flex cursor-pointer flex-col overflow-hidden h-full "
        onMouseMove={handleMouseMove}
      >
        <div className="grainy-bg md:hidden md:group-hover:block absolute inset-0 opacity-[0.09]" />
        <motion.div
          className=" absolute -inset-px hidden rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 md:block"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              #ffffff39,
              transparent 60%
            )
          `,
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
