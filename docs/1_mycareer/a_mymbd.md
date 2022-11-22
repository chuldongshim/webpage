---
id: mymbd
title: 모델기반설계
---
---

## MBD 시작

### 졸업논문

졸업논문에서 지능형 근력강화 시스템을 수학적으로 모델링하고, 모델링한 시스템을 분석할 때 처음으로 Matlab/Simulink를 사용하였습니다.

<p align="center">
	<img
		src={require('/img/3_embedded/img1_0_mju_paper.png').default}
		alt="Example banner"
		width="350"
	/>
</p>

* 담당
  * 기구부 및 전장부 설계 및 개발
  * 시스템 요소를 Modeling한 후 Matlab-Simulink 시뮬레이션과 실제 실험데이터와의 비교를 통하여 Modeling의 타당성 검증
  * 시스템 요소 Modeling의 타당성을 검증한 후 전체 시스템으로 통합하는 단계적인 절차 제시
  * 통합된 System Model의 안정성 확인을 통하여 제어기 성능을 검증하여 주어진 제어 명령을 잘 추종하는 제어기 설계
  * Modeling System과 Real System과의 출력 데이터 일치 여부를 확인하여 제어기 성능 검증
  * 실제 System을 이용하여 사용자의 근력 증강 여부 검증 
* 개발내용
  * FSR(Force Sensing Registor)를 통하여 시스템 입력(제어명령)을 생성하고 전압(PWM) 제어기를 통하여 모터 제어 (Force Sensing Registor : 힘에 비례하여 전압이 증가하는 센서)
  * 제어기는 구동 상태에 따라 제어 모드를 변환시켜 모터 제어 (FSR 입력이 없을 때에는 PI제어(위치)를 수행하고, FSR 입력이 있을 때에는 PD제어(속도) 수행)
  * 검지 손가락의 미미한 움직임을 통하여 5kg의 물건을 움직여 개발된 시스템 동작 확인

<p align="center">
	<iframe 
		width="350" height="250"
		src="https://www.youtube.com/embed/Bdt_fOkhiw8?rel=0"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;명지대 석사논문(2007.03 ~ 2009.02)&gt;</em>
</p>


## 윈도우 선행학습

### Window MBD 선행학습

* 소속 : 동양기전/DYAUTO
* 기간 : 2013.10 ~ 2014.09 (대리 1년차)

<p align="center">
	<img
		src={require('/img/2_mbd/img2_1_dyauto_mbd.png').default}
		alt="Example banner"
	/>
</p>

* MicroAutoBox를 이용한 제어기 RCP(Rapid Control Prototyping) 구현 및 동작확인
  * Matlab Stateflow를 이용한 제어 로직 프로그래밍
  * Hardware dependent device driver interface를 통한 peripheral control(Timer/Interrupt, ADC, Port IO 등)
* Matlab/Simulink를 통한 제어기 시뮬레이션 확인 및 모델 코드 자동생성(AutoCode Generation)
* 장애물 감지 시 반전 알고리즘/로직 시뮬레이션

처음으로 MBD를 접하여 파워윈도우 시스템을 대상으로 Simulink 모델을 개발하고, 모델로부터 시뮬레이션을 수행하여 모델링 타당성을 검증한 다음, MicroAutoBox를 통해 시뮬레이션과 동일하게 실제 윈도우가 동작되는지를 확인하여 경험을 통해 MBD에 대한 기초를 다질 수 있었습니다.

<p align="center">
	<iframe 
		width="350" height="250"
		src="https://www.youtube.com/embed//JWzVYKv_Eac?rel=0"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;장애물 감지 시 반전 알고리즘 시뮬레이션&gt;</em>
</p>

### Window MBD 기본기능구현

* 소속 : DYESSYS(DYAUTO, ESSYS 합작사)
* 기간 : 21.08.20 ~ 21.11.30 (책임 3년차)

MBD를 통해 기능로직에 대한 HW 독립적인 SW(C코드)를 자동생성하고, 타겟 MCU에 포팅하여 기능로직 정상동작 확인을 목적으로 프로젝트를 진행하였습니다. MBD를 통해 7가지 기능로직을 설계하고 C코드를 생성 후 타겟 MCU에서 동작하여 설계한 로직을 검증해 보았습니다.

<p align="center">
	<iframe
		src="https://www.youtube.com/embed//eEmUgEgfH4k?rel=0"
		width="350" height="250"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;장애물 감지 시 윈도우 반전 (21년12월03일)&gt;</em>
</p>


## 안전벨트 고객대응 실사례

### MBD를 통한 PSB개발 고객대응

양산적용을 타겟으로 고객 요청하에 진행된 프로젝트로 MBD를 통해 PSB(Pre-safe Seat Belt)의 기능로직SW를 개발하는 것이 주요 목적이며, 시뮬링크를 이용하여 아키텍처를 설계하고 기능을 아키텍처에 할당(allocation)하여 기능로직을 MBD를 통해 구현하였다.

* 소속 : DYESSYS(DYAUTO, ESSYS 합작사)
* 기간 : 22.03.01 ~ 현재 (책임 4년차)
* MBD 선행 개발 프로세스 수립
* 개발 하드웨어 - S32K144 + VNH5019(모터드라이버 by ST)
* 칼만필터를 이용한 DC모터 제어
* S32K144+Simulink를 통한 제어 알고리즘 개발 및 AutoCode
* Cypress MCU에서 동작 가능한 HW 독립적인 코드 생성


## 와이퍼 알고리즘 개발

### Kalman Filter이론학습(Self_Study)

### Wiper MBD 기본기능구현

시뮬레이션 검증을 통해 제어로직을 개발하고, 

* 소속 : DYESSYS(DYAUTO, ESSYS 합작사)
* 기간 : 21.04.01 ~ 21.06.30 (책임 3년차)
* 목적 : GitLab-Agile방식을 통한 Wiper MBD개발
  * MBD기반 제어로직 모델링
  * 시뮬레이션을 통한 모델 검증
  * 자동생성코드 타겟MCU(RCP) 구현 및 동작검증
* 구현 내용 : Wiper모터를 대상으로 모터구동부 구현
  * 기능로직 보다는 모터구동부만 구현
  * 모터 가속-등속-감속제어를 위한 profiling 로직 설계
  * 위치/속도 PID제어
(공유한 구동부-통신부-제어로직부 ... 블록다이어그램 이미지(fig_2_1 추가)

<p align="center">
	<iframe
		src="https://www.youtube.com/embed/nDjuDzeTUoU?rel=0"
		width="350" height="250"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;모터 단품 3D시뮬레이션&gt;</em>
</p>

MBD를 통해 생성된 자동생성코드가 실제 MCU에 적용되어 시뮬레이션과 동일하게 동작하는 것을 확인함으로써 MBD가 개발실무에 적용이 가능한지 타당성을 확인하는 것을 목적으로 프로젝트를 진행하였습니다.

<p align="center">
	<iframe
		src="https://www.youtube.com/embed/gZ7yAiUIIdw?rel=0"
		width="350" height="250"
		frameborder="0"
		allowfullscreen="true">
		이 브라우저는 iframe을 지원하지 않습니다.
	</iframe><br/><em>&lt;Auto Wiping 동작확인&gt;</em>
</p>

### FFT MCU 구현 및 Matlab 연동 확인


### Wiper MBD 제어기설계(관측기,LQR)


## BLDC 선행학습

### Sensored BLDC MBD

* MBD기반 BLDC모터 제어

### 추후계획(하고싶은 것)

* CAD연동(ProE/Solidworks 등)을 통한 Simulnik모델 가상 시뮬레이션
* 하드웨어 없이 시뮬레이션 만으로 타겟 소프트웨어 개발
(로봇팔 PIL 이미지 삽입)
