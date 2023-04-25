# (가제) 터틀 문고

- 책 전문 판매점

## 서비스 구성 안내

### 1. 서비스 소개

- 기술 스택 (Bulma css, node, mongodb 등)
- 웹서비스에 대한 자세한 개요 등

### 2. 서비스 주요 기능 설명

- **웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**

  - 주요 기능 (주된 활용성) 및 서브 기능 소개
  - 프로젝트만의 차별점, 기대 효과

  - [**메인 페이지**](https://www.kyobobook.co.kr/)
    - 전체 상품 조회
    - 베스트셀러
    - 신작 소개
    - 카테고리 분류
  - **장바구니 페이지**
  - **구매 페이지**
    - 장바구니 페이지에서 '구매하기'를 통해 넘어와 실제 구매 작업
  - **회원 가입 페이지**
  - **로그인 페이지**
  - **로그아웃 페이지**

  - **에러 페이지**

    - 로그인 실패
    - 일반 사용자가 관리자 페이지 접근

### 3. 서비스 구성도

- **서비스 구조도 그림 (사용한 기술 스택)**

- **와이어프레임 링크 (예상 웹 화면 UI)**

  - e.g) [figma 사용](https://www.figma.com/file/OsdvJUeVwzLp3v6hhtnO7F/SW-TermProject1-1%EC%A1%B0-Page-Structure?node-id=0%3A1&t=eV2oUGziwyhEBRDY-1)

  - [API 명세를 문서화한 링크](https://galactic-astronaut-216907.postman.co/workspace/Team-Workspace~f839ab41-54a6-4deb-8a69-01f98b94442f/overview)

- [**Commit rule**](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

| 태그 이름        | 설명                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| Feat             | 새로운 기능을 추가할 경우                                                |
| Fix              | 버그를 고친 경우                                                         |
| Design           | CSS 등 사용자 UI 디자인 변경                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                   |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                                   |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                    |
| Refactor         | 프로덕션 코드 리팩토링                                                   |
| Comment          | 필요한 주석 추가 및 변경                                                 |
| Docs             | 문서를 수정한 경우                                                       |
| Test             | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                       |
| Chore            | 빌드 테스트 업데이트, 패키지 매니저 설정하는 경우 (프로덕션 코드 변경 X) |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                       |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                       |

**e.g) commit -m "Feat: 추가 로그인 함수"**

- [**사용하는 브랜치**](https://www.notion.so/elice/1340e2f5ffd34c5bbb292f16c3f2718b?pvs=4#be78e0aa269b4702b1fa8a6d2c5d4cb4)

  - **`master (main)`**: 바로 product로 release(배포)할 수 있는 브랜치
  - **`dev (develop)`**: product로 release할 준비가 된 가장 안정적인 브랜치로 개발이 완료된 상태라면 **master** 브랜치로 merge
  - **`feature`**: 새로운 기능을 추가할 때 사용하는 브랜치로 **dev** 브랜치에서 분기하여 진행되며, 개발이 완료된 기능은 **dev** 브랜치로 merge
  - 프로젝트에서는 사용하지 않는 브랜치

  - gitflow 전략에서는 다음 2개의 브랜치를 추가로 사용하지만 이 브랜치는 실제로 운영되고 있는 서비스를 개발하면서 사용되며, 프로젝트의 경우 **master, dev, feature 브랜치**는 필수적으로 사용하는 것이 좋지만, release, hotfix 브랜치는 사용하지 않아도 됩니다.

- [**마크다운 문법**](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### 4. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무        | 이름   | 담당 업무       |
| ------ | ---------------- | ------ | --------------- |
| 고지연 | 백엔드 개발      | 조수하 | 프론트엔드 개발 |
| 김종현 | 백엔드 개발      | 양영조 | 프론트엔드 개발 |
| 이규해 | 팀장/백엔드 개발 | 권희경 | 프론트엔드 개발 |

**멤버별 responsibility**

1. 고지연: 백엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 권희경: 프론트엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

3. 김종현: 백엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 API 완성
- 수정 단계: 피드백 반영해서 백엔드 설계 수정

4. 양영조: 프론트엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

5. 이규해: 팀장/백엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

6. 조수하: 프론트엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

### 5. 실행 방법

- 백엔드 (예시):
  ```bash
  1. mongodb 실행
  2. yarn start (혹은 npm start)
  ```

### 6. 버전

- 프로젝트의 버전 기입 (예: 1.0.0)

### 7. FAQ

- 자주 받는 질문 정리
- 예시) 이 서비스는 어떻게 실행하면 되나요?
  - git clone을 하신 후 아래 커맨드를 입력하시면 됩니다. ~~~
