import { useEffect } from "react";
import gsap from "gsap";

export function useTypewriterEffect(
  firstRowRefs: React.RefObject<HTMLDivElement[]>,
  secondRowRefs: React.RefObject<HTMLDivElement[]>,
  thirdRowRefs: React.RefObject<HTMLDivElement[]>,
  fourthRowRefs: React.RefObject<HTMLDivElement[]>
) {
  useEffect(() => {
		// 4개의 배열이 모두 비어 있으면 반환
    if (!firstRowRefs.current.length && !secondRowRefs.current.length && !thirdRowRefs.current.length && !fourthRowRefs.current.length) return;

    // 각 div의 텍스트를 글자별로 span으로 변환 START!
    [firstRowRefs, secondRowRefs, thirdRowRefs, fourthRowRefs].forEach((rowRefs) => {
			// rowRefs는 useRef<HTMLDivElement[]> 객체이기 때문에 실제 div 요소들은 current에 저장되어 있음
      rowRefs.current.forEach((div) => {
        const text = div.textContent || ""; //div에 있는 text 가져옴
        div.innerHTML = ""; // 기존 텍스트 초기화

				// split으로 한글자씩 배열로 변환 후 배열 순환
        text.split("").forEach((char) => {
          const span = document.createElement("span"); // span 생성
          span.textContent = char; // span 요소에 char 삽입
          span.style.opacity = "0";
          div.appendChild(span); // 그렇게 생성된 span을 div에 삽입입
        });
      });
    });
		// 각 div의 텍스트를 글자별로 span으로 변환 END!


    // Master Timeline (순차적으로 실행할 TimeLine) START!
    const masterTimeline = gsap.timeline({ repeat: -1 });

    masterTimeline.to(firstRowRefs.current.map((div) => Array.from(div.children)), {
        opacity: 1,
        duration: 0.03, // 애니메이션 실행 시간
        stagger: 0.03, // 순차적으로 실행
        delay: 4, // 1초 뒤에 실행
      })
      .to(firstRowRefs.current.map((div) => Array.from(div.children)), {
          opacity: 0,
          duration: 0.03,
          stagger: 0.03,
        },
        "+=1"
      )
      .to(secondRowRefs.current.map((div) => Array.from(div.children)), {
        opacity: 1,
        duration: 0.03,
        stagger: 0.03,
      })
      .to(secondRowRefs.current.map((div) => Array.from(div.children)), {
          opacity: 0,
          duration: 0.03,
          stagger: 0.03,
        },
        "+=1"
      )
      .to(thirdRowRefs.current.map((div) => Array.from(div.children)), {
        opacity: 1,
        duration: 0.03,
        stagger: 0.03,
      })
      .to(thirdRowRefs.current.map((div) => Array.from(div.children)), {
          opacity: 0,
          duration: 0.03,
          stagger: 0.03,
        },
        "+=1"
      );
		// Master Timeline (순차적으로 실행할 TimeLine) END!

		// Scroll Down 텍스트 (개별 TimeLine) START!
		const fourthTimeLine = gsap.timeline({ repeat: -1 });

    fourthTimeLine.to(fourthRowRefs.current.map((div) => Array.from(div.children)), {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        delay: 2,
      })
			.to(fourthRowRefs.current.map((div) => Array.from(div.children)), {
				y: -10,
				stagger: 0.05,
				scale: 1.2,
				marginRight: '0.6rem',
				repeat: 3,
				yoyo: true,
				fontWeight: '700',
			})
			.to(fourthRowRefs.current.map((div) => Array.from(div.children)), {
				y: 0,
				stagger: 0.05,
				scale: 1,
				marginRight: '0.2rem',
				fontWeight: '400',
			})
			.to(fourthRowRefs.current.map((div) => Array.from(div.children)), {
          opacity: 0,
          duration: 0.05,
          stagger: 0.05,
        },
        "+=1"
      );
		// Scroll Down 텍스트 (개별 TimeLine) END!

		// 컴포넌드 언마운트시 클린업
    return () => { // gsap의 kill 메서드로 강제 종료
      masterTimeline.kill();
      fourthTimeLine.kill();
    };
  }, [firstRowRefs, secondRowRefs, thirdRowRefs, fourthRowRefs]);
}