# boiler-plate

## config

비밀정보 보호는 gitignore에서 올릴때 배제되게 해야한다.

### package.json

배포할 때 어떤 라이브러리가 포함되느냐 차이이다.

- dependencies
  설치된 라이브러리 포함

- devDependencies (개발자용)
  개발할 때 필요한 라이브러리기 때문에 배포할 때 포함되지 않는다.

- type:"module"
  es module을 사용하여 import, export 사용 가능
