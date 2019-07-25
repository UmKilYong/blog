import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import SNB from "../../../Components/SNB";

export default class TechGit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{position : "relative", width : "100%", height : "100%"}}>
                <SNB>
                    <ul>
                        <li>
                            <NavLink>
                                <h6>Git</h6>
                            </NavLink>
                        </li>
                    </ul>
                </SNB>

                <div className="content">
                    <div>
                        <h3>Git</h3>
                        여러 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리시스템.
                        주로 소스코드 관리에 사용되지만, 문서 협업을 위해서도 사용된 사례(https://www.thisisgame.com/webzine/gameevent/nboard/227/?n=93532)가 있다.
                    </div>
                    <div>
                        Git 사용법
                        <div>
                            Git 설치
                            <ul>
                                <li>
                                    Linux에 설치
                                    Linux에서 패키지로 Git을 설치할 때는 보통 각 배포판에서 사용하는 패키지 관리도구를 사용하여 설치한다. Fedora(또는 비슷하게 RPM 기반 패키지 시스템을 사용하는 RHEL, CentOS)에서는 아래와 같이 `dnf`를 사용 한다.

                                    $ sudo dnf install git-all
                                    Ubuntu등의 데비안 계열 배포판에서는 `apt`를 사용한다.

                                    $ sudo apt install git-all
                                    다른 Unix 배포판에 설치하려면 http://git-scm.com/download/linux 에서 확인하라.
                                </li>
                                <li>
                                    Mac에 설치
                                    Mac에 Git을 설치하는 방법 중에는 Xcode Command Line Tools를 설치하는 방법이 가장 쉽다. Mavericks(10.9)부터는 Terminal에 단지 처음으로 'git’을 실행하는 것으로 설치가 시작된다. 'git’이 설치돼 있지 않으면 설치하라고 안내해준다.

                                    $ git --version
                                    만약 Git이 시스템에 설치되어있지 않은 경우, 설치할 수 있도록 안내 메시지가 뜰 것이다.

                                    좀 더 최신 버전이 필요하면 바이너리 인스톨러로 설치할 수 있다. macOS용 Git 인스톨러는 Git 웹사이트에서 관리하고 있으며 http://git-scm.com/download/mac 에서 내려받는다.
                                </li>
                                <li>
                                    Windows에 설치
                                    Windows에 Git을 설치하는 방법은 여러 가지다. 공식 배포판은 Git 웹사이트에서 내려받을 수 있다. http://git-scm.com/download/win에 가면 자동으로 다운로드가 시작된다. 이 프로젝트가 'Git for Windows’인데, Git 자체와는 다른 별도의 프로젝트다. 자세한 정보는 https://git-for-windows.github.io/에서 확인한다.

                                    자동화된 설치 방식은 Git Chocolatey 패키지를 통해 이용해볼 수 있다. 패키지는 커뮤니티에 의해 운영되는 프로그램인 점을 알려드린다.

                                    Windows에서도 Git을 사용하는 또 다른 방법으로 'GitHub Desktop’을 설치하는 방법이 있다. 이 인스톨러는 CLI와 GUI를 모두 설치해준다. 설치하면 Git을 Powershell에서 사용할 수 있다. 인증정보(Credential) 캐싱과 CRLF 설정까지 잘 된다. 이런 것들은 차차 배우게 될 것인데, Git 사용자라면 쓰게 될 기능들이다. 'GitHub Desktop’은 GitHub Desktop 웹사이트에서 내려받는다.
                                </li>
                            </ul>
                        </div>

                        <div>
                            Git저장소 생성
                            Git 저장소를 만드는 방법에는 2가지 방법이 있다.
                            <ul>
                                <li>
                                    $ git init
                                    로컬 디렉토리를 깃 저장소로 사용한다.
                                    git init을 통해서 생성된 프로젝트를 github 또는 gitlab에 연동하기 위해서는 github이나 gitlab에 신규 프로젝트를 생성한 이후에 아래의 명력어를 사용하면 된다.
                                    $ git remote add origin https://github.com/'loginUserName'/'projectName'.git
                                </li>
                                <li>
                                    $ git clone https://github.com/'loginUserName'/'projectName'.git
                                    이미 github이나 gitlab을 통해서 생선된 프로젝트를 내 로컬환경으로 내려받는 형식이다.
                                    위 명력어를 실행하는 디렉토리에 해당 프로젝트의 git소스파일을 내력받기 된다.

                                    $ git clone https://github.com/'loginUserName'/'projectName'.git -b 'branch name'
                                    명령어를 실행한 경우 특정 브랜치만 clone받을수 있다. 하지만 다른 remote 브랜치를 chekcout할수는 없다.(단, pull, push를 통하여 다른 remote브랜치의 소스를 접근은 가능하다.)
                                </li>
                            </ul>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
