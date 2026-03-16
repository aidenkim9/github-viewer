# GitHub Viewer

GitHub 사용자명을 검색하면 프로필과 공개 레포지토리 목록을 보여주는 웹 애플리케이션입니다.

---

## 기술 스택

- **React** + **TypeScript**
- **Vite**
- **TanStack Query (React Query)** - 서버 상태 관리 및 캐싱
- **Tailwind CSS** - 스타일링

---

## 주요 기능

- GitHub 사용자명 검색
- 사용자 프로필 표시 (아바타, 이름, 바이오, 위치, Repo / Followers / Following 수)
- 공개 레포지토리 목록 표시 (이름, 설명, 언어, 스타 수, 최근 업데이트일)
- 로딩 / 에러 / 초기 상태 분기 처리

---

## 프로젝트 구조

```
src/
├── api/
│   └── github.ts          # GitHub API 호출 함수 (fetchUser, fetchRepo)
├── components/
│   ├── Header.tsx          # 헤더 + Searchbar 포함
│   ├── Searchbar.tsx       # 검색 input + 버튼 (ref 사용)
│   ├── UserProfile.tsx     # 사용자 프로필 카드
│   ├── RepoList.tsx        # 레포지토리 목록
│   └── RepoItem.tsx        # 레포지토리 아이템
├── types/
│   └── github.ts           # GithubUser, GithubRepo 타입 정의
├── App.tsx                 # 메인 컴포넌트, useQuery 관리
└── main.tsx                # QueryClientProvider 설정
```

---

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 구현 상세

### 서버 상태 관리 (TanStack Query)

`useEffect` + `useState` 조합 대신 `useQuery`를 사용해 로딩 / 에러 / 데이터 상태를 일괄 관리합니다.

```typescript
const { data, isLoading, isError, error } = useQuery({
  queryKey: ["search", searchTerm],
  queryFn: () => searchUser(searchTerm),
  enabled: !!searchTerm, // 검색어가 있을 때만 실행
});
```

- `queryKey`에 `searchTerm`을 포함시켜, 같은 검색어는 캐시에서 즉시 응답
- `enabled: !!searchTerm`으로 초기 렌더링 시 불필요한 API 호출 방지

### 검색 트리거 구조

버튼 클릭 시에만 쿼리가 실행되도록 `submittedTerm` 패턴을 사용합니다.

```
Searchbar (ref로 input 값 관리)
  → 버튼 클릭 시 onSearch(value) 호출
    → App의 setSearchTerm 업데이트
      → queryKey 변경 → useQuery 재실행
```

### 컴포넌트 데이터 흐름

```
App (searchTerm state, useQuery)
  └── Header
        └── Searchbar ──onSearch 콜백──▶ App.setSearchTerm
```

`QueryClientProvider`는 `main.tsx`에서 `App`을 감싸도록 설정해, `useQuery`를 사용하는 모든 컴포넌트에서 동일한 QueryClient 인스턴스를 공유합니다.
