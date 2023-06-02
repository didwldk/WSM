# CSS 정리
## 문서 스타일링 방법
1. ```<TAG style="">```
2. ```<style> ~ </style>```
3. ```.css 파일 생성 후 link로 연결```

## 형식
```css
selector(선택자){
    attribute: value;   
    /*comment*/
}
```

### selector
<pre>
*     
    > 모든 태그 다 적용
TAG   
    > 특정 태그 적용
id    
    > 유일한 id에 적용
class 
     >같은 class에 적용
____________________________________

selector1 > selector2   
1번 = 부모 / 2번 = 자식
    > 1번의 자식 2번에 적용
selector1 selector2
1번 = 부모 / 2번 = 자손
    > 중간 말고 1번의 자식의 자식
        자손 2번에 적용
selector1, selector2
    1과 2에 같이 적용
selector1 + selector2
    > 
selector1 ~ selector2

____________________________________

selector:first-child()
selector:nth-child(n)
selector:last-child()

selector:hover 
    > 마우스 올렸을 때의 selecter
____________________________________

[속성="값"]
    > < TAG 속성="값">에 적용

</pre>

# 우선순위
1. !important
2. ```<TAG style="">```
3. #id
4. .class
5. TAG
6. \*
- 구체 > 포괄
- 같은 우선순위일 때 나중에 작성 한 것이 적용