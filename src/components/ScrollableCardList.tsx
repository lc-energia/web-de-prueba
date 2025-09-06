'use client';
import {
    animate,
    motion,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useRef } from "react";

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `transparent`;
const opaque = `black`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            )
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        }
    });

    return maskImage;
}

function StyleSheet() {
    return (
        <style>{`
            .scroll-list-container {
              width: 100%;
              position: relative;
            }

            .scroll-list-progress {
                position: absolute;
                top: -15px;
                left: -15px;
                transform: rotate(-90deg);
            }

            .scroll-list-progress .bg {
                stroke: #f0f0f0;
            }

            .scroll-list-progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            .scroll-list-progress .indicator {
                stroke: var(--primary);
            }

            .scroll-list-ul {
                display: flex;
                list-style: none;
                height: auto; /* Adjust height to content */
                overflow-x: scroll;
                padding: 20px 0;
                margin: 0 auto;
                gap: 20px;
            }

            .scroll-list-ul::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #f0f0f0;
                border-radius: 1ex;
            }

            .scroll-list-ul::-webkit-scrollbar-thumb {
                background: var(--primary);
                border-radius: 1ex;
            }

            .scroll-list-ul::-webkit-scrollbar-corner {
                background: #f0f0f0;
            }

            .scroll-list-li {
                flex: 0 0 300px; /* Card width */
                background: white;
                border-radius: 18px;
                box-shadow: 0 0 45px rgba(0, 0, 0, .08);
                padding: 20px;
                height: auto;
                white-space: normal; /* Allow text to wrap */
            }
    `}</style>
    )
}

const ScrollableCardList = ({ items }: { items: React.ReactNode[] }) => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const maskImage = useScrollOverflowMask(scrollXProgress);

    return (
        <div className="scroll-list-container">
            <svg className="scroll-list-progress" width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    className="indicator"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <motion.ul ref={ref} className="scroll-list-ul" style={{ maskImage, WebkitMaskImage: maskImage }}>
                {items.map((item, index) => (
                    <li key={index} className="scroll-list-li">
                        {item}
                    </li>
                ))}
            </motion.ul>
            <StyleSheet />
        </div>
    )
}

export default ScrollableCardList;
