import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectCard() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div class="grid grid-cols-2 gap-4">
        <motion.div
          layoutId={20}
          onClick={() => setSelectedId(20)}
          className="w-full cursor-pointer"
        >
          <motion.div className="bg-gray-700 h-72 rounded-2xl overflow-hidden relative mb-4">
            <motion.div
              initial={{ x: "-50%" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-4/5 aspect-[16/9] absolute -bottom-12 left-1/2 rounded-lg overflow-hidden"
            >
              <motion.img
                className="object-cover w-full h-full object-top"
                src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/bbe03c42f4ca8ebc1b382dc70a988178?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr//////////wEaCXVzLXdlc3QtMiJIMEYCIQD4JcltkvuSrl5n4wwfakInw56XGRlCWegDxERgeX2V9AIhANHSTtgjl3rUPDHqtcBsA3F7EaRq7I5VzWBSSfwwjMVDKs0ECFMQABoMNzM5OTM5MTczODE5IgzmWzLR4h0oM3CF9SoqqgRfDnFFc3NGXUeaflhBDr8haLrx5QFnv8TmqpfcWaVR6zREv3hYZ3ojB%2BUwj7eikfX4fstKnk/dpdrWggAh4glLfRWH%2Bk/sC3d26acPQv1JMQDiPfgboqkJ/hGp%2B/qi7iA7f4npcn3msa%2ByNefX5noVS3g2OUZRDTWTzqmDRQF1U5SyXEl/xXwWX7QIVyvuWl1jS%2BMkvgz1Mb5oJJzQvkmqmnKQpc9orw6XDyHiC3jyAIzcCsdg774B4Bg0yh5YzCBwmPzrGZ4n%2B9ExljuW4IocoHrq24Pps306W/8WMniOh1BZaOrPu3t2wA3Tw%2BKRmAquncw8CUfM%2BpZEWBvrFRBCA%2B7TaKuqxMKvH%2BbPuCAl5gBqMHv/FyuVo3cukQ0lSrTcJfPRgBLr%2BrSNDX2XqMrsBQyQtwBk73uPARjY1AmdHNcHjIlRZi2XixJCZTL%2BiasomqoVmj%2BpI4jvvLsyGKFd3eKkbmZ82LO4eqBkAMY7d8Qcb28NqmH9oBbAQlzMKeDpitso2onSnVH4U1C%2BGmBpPXk9eUnl2prf8%2B3IUfAWCfgtYlbC5m25bFaEk362TDtaRvEeiODuo1AEK1w7V3PBBs96a9GeFRsnC36/ozJ0jXT522D9o/BWDMEQ5VT8D2WCsgb09jix1lIkugjE%2BPNX6SEE5hVe1fN65SDvjc3AgSwJrShLAbbVNs2%2BcIcW/KyvBmbqKE1GgESYiVRJkGLaGY0UuOTz%2BtbmkjDRl4i0BjqmAWaOE3Hy0s4LED5BBh9YxBWa58ediOi8c97dNCQfZ1pEScrGp7TRd/%2BEd3JMwLIAWAThPrZqd%2BCdO9inhIUOabhjg1oV9JMGjGM4kwYiY2nl/CoJMgZfkwJ60%2BFrfBPRG4ghyA9S5vj4wA7BvAYLQkxjZuiaMnijxB5WErjnwJgx2aCsuKGZiP38ejwhGgOLS6jVLmDrNHZhwgm68d/8xWCAiOGJVro=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240701T025025Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5SN5JTMBX/20240701/us-west-2/s3/aws4_request&X-Amz-Signature=880a97ade8712d2d35dea2f55171f15c7816a743d1ccef4b62d75d13ad794120"
              ></motion.img>
            </motion.div>
          </motion.div>
          <motion.p className="text-white text-2xl font-bold mb-4">
            University cirriculum tracker
          </motion.p>
          <motion.p className="text-primary-color mb-4">
            Node.js, Express, Vercel, Firebase, HTML, CSS, JS, Custom domain
          </motion.p>
          <motion.p className="mb-4">
            I made this project because the currently active university (Toyohashi university of
            technology) website is pretty complica...
          </motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div className="fixed top-0 left-0 w-full h-full z-20 backdrop-blur bg-black bg-opacity-20 py-8">
            <motion.div
              layoutId={selectedId}
              className="w-[40rem] rounded-2xl overflow-hidden mx-auto"
            >
              <motion.img
                className="w-full aspect-[16/9] object-cover object-top"
                src="https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/bbe03c42f4ca8ebc1b382dc70a988178?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr//////////wEaCXVzLXdlc3QtMiJIMEYCIQD4JcltkvuSrl5n4wwfakInw56XGRlCWegDxERgeX2V9AIhANHSTtgjl3rUPDHqtcBsA3F7EaRq7I5VzWBSSfwwjMVDKs0ECFMQABoMNzM5OTM5MTczODE5IgzmWzLR4h0oM3CF9SoqqgRfDnFFc3NGXUeaflhBDr8haLrx5QFnv8TmqpfcWaVR6zREv3hYZ3ojB%2BUwj7eikfX4fstKnk/dpdrWggAh4glLfRWH%2Bk/sC3d26acPQv1JMQDiPfgboqkJ/hGp%2B/qi7iA7f4npcn3msa%2ByNefX5noVS3g2OUZRDTWTzqmDRQF1U5SyXEl/xXwWX7QIVyvuWl1jS%2BMkvgz1Mb5oJJzQvkmqmnKQpc9orw6XDyHiC3jyAIzcCsdg774B4Bg0yh5YzCBwmPzrGZ4n%2B9ExljuW4IocoHrq24Pps306W/8WMniOh1BZaOrPu3t2wA3Tw%2BKRmAquncw8CUfM%2BpZEWBvrFRBCA%2B7TaKuqxMKvH%2BbPuCAl5gBqMHv/FyuVo3cukQ0lSrTcJfPRgBLr%2BrSNDX2XqMrsBQyQtwBk73uPARjY1AmdHNcHjIlRZi2XixJCZTL%2BiasomqoVmj%2BpI4jvvLsyGKFd3eKkbmZ82LO4eqBkAMY7d8Qcb28NqmH9oBbAQlzMKeDpitso2onSnVH4U1C%2BGmBpPXk9eUnl2prf8%2B3IUfAWCfgtYlbC5m25bFaEk362TDtaRvEeiODuo1AEK1w7V3PBBs96a9GeFRsnC36/ozJ0jXT522D9o/BWDMEQ5VT8D2WCsgb09jix1lIkugjE%2BPNX6SEE5hVe1fN65SDvjc3AgSwJrShLAbbVNs2%2BcIcW/KyvBmbqKE1GgESYiVRJkGLaGY0UuOTz%2BtbmkjDRl4i0BjqmAWaOE3Hy0s4LED5BBh9YxBWa58ediOi8c97dNCQfZ1pEScrGp7TRd/%2BEd3JMwLIAWAThPrZqd%2BCdO9inhIUOabhjg1oV9JMGjGM4kwYiY2nl/CoJMgZfkwJ60%2BFrfBPRG4ghyA9S5vj4wA7BvAYLQkxjZuiaMnijxB5WErjnwJgx2aCsuKGZiP38ejwhGgOLS6jVLmDrNHZhwgm68d/8xWCAiOGJVro=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240701T025025Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5SN5JTMBX/20240701/us-west-2/s3/aws4_request&X-Amz-Signature=880a97ade8712d2d35dea2f55171f15c7816a743d1ccef4b62d75d13ad794120"
              ></motion.img>
              <motion.div className="bg-slate-900 px-8 pt-12 pb-8">
                <motion.p className="text-white text-2xl font-bold mb-4">
                  University cirriculum tracker
                </motion.p>
                <motion.p className="text-primary-color mb-4">
                  Node.js, Express, Vercel, Firebase, HTML, CSS, JS, Custom domain
                </motion.p>
                <motion.pre className="mb-4">
                  I made this project because the currently active university (Toyohashi university
                  of technology) website is pretty complicated and in japanese so I wanted to add
                  features to suit my needs. 
                  Website: https://tut-manage.space/ 
                  Github: https://github.com/b1rigu/TUTManage 
                  Features: 
                    - View it in english 
                    - Todos list in every class 
                    - More discreet and organized ui
                </motion.pre>
                <motion.p className="text-white text-2xl font-bold mb-4">Project Links.</motion.p>
                <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
