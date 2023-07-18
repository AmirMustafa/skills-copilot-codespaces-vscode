function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberConntroller',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}