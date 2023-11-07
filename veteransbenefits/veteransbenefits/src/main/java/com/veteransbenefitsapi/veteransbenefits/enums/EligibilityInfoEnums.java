package com.veteransbenefitsapi.veteransbenefits.enums;

import lombok.Data;

@Data
public class EligibilityInfoEnums {

    private String[] serviceTypes;
    private String[] branches;
    private String[] rankCategories;
    private String[][] ArmyRanks;
    private String[][] NavyRanks;
    private String[][] AirForceRanks;
    private String[][] MarineRanks;
    private String[][] CoastGuardRanks;

    public enum ServiceType {
        ACTIVE,
        GUARD,
        RESERVE
    }

    public enum Branch {
        ARMY,
        NAVY,
        AIR_FORCE,
        MARINES,
        COAST_GUARD
    }

    public enum RankCategory {
        ENLISTED,
        OFFICER
    }

    public enum ArmyRanksEnlisted {
        PRIVATE,
        PRIVATE_SECOND_CLASS,
        PRIVATE_FIRST_CLASS,
        SPECIALIST,
        CORPORAL,
        SERGEANT,
        STAFF_SERGEANT,
        SERGEANT_FIRST_CLASS,
        MASTER_SERGEANT,
        FIRST_SERGEANT,
        SERGEANT_MAJOR,
        COMMAND_SERGEANT_MAJOR,
        SERGEANT_MAJOR_OF_THE_ARMY
    }

    public enum NavyRanksEnlisted {
        SEAMAN_RECRUIT,
        SEAMAN_APPRENTICE,
        SEAMAN,
        PETTY_OFFICER_THIRD_CLASS,
        PETTY_OFFICER_SECOND_CLASS,
        PETTY_OFFICER_FIRST_CLASS,
        CHIEF_PETTY_OFFICER,
        SENIOR_CHIEF_PETTY_OFFICER,
        MASTER_CHIEF_PETTY_OFFICER,
        COMMAND_MASTER_CHIEF_PETTY_OFFICER,
        MASTER_CHIEF_PETTY_OFFICER_OF_THE_NAVY
    }

    public enum AirForceRanksEnlisted {
        AIRMAN_BASIC,
        AIRMAN,
        AIRMAN_FIRST_CLASS,
        SENIOR_AIRMAN,
        STAFF_SERGEANT,
        TECHNICAL_SERGEANT,
        MASTER_SERGEANT,
        SENIOR_MASTER_SERGEANT,
        CHIEF_MASTER_SERGEANT,
        COMMAND_CHIEF_MASTER_SERGEANT,
        CHIEF_MASTER_SERGEANT_OF_THE_AIR_FORCE
    }

    public enum MarineRanksEnlisted {
        PRIVATE,
        PRIVATE_FIRST_CLASS,
        LANCE_CORPORAL,
        CORPORAL,
        SERGEANT,
        STAFF_SERGEANT,
        GUNNERY_SERGEANT,
        MASTER_SERGEANT,
        FIRST_SERGEANT,
        MASTER_GUNNERY_SERGEANT,
        SERGEANT_MAJOR,
        SERGEANT_MAJOR_OF_THE_MARINE_CORPS
    }

    public enum CoastGuardRanksEnlisted {
        SEAMAN_RECRUIT,
        SEAMAN_APPRENTICE,
        SEAMAN,
        PETTY_OFFICER_THIRD_CLASS,
        PETTY_OFFICER_SECOND_CLASS,
        PETTY_OFFICER_FIRST_CLASS,
        CHIEF_PETTY_OFFICER,
        SENIOR_CHIEF_PETTY_OFFICER,
        MASTER_CHIEF_PETTY_OFFICER,
        COMMAND_MASTER_CHIEF,
        MASTER_CHIEF_PETTY_OFFICER_OF_THE_COAST_GUARD
    }

    public enum ArmyRanksOfficer {
        SECOND_LIEUTENANT,
        FIRST_LIEUTENANT,
        CAPTAIN,
        MAJOR,
        LIEUTENANT_COLONEL,
        COLONEL,
        BRIGADIER_GENERAL,
        MAJOR_GENERAL,
        LIEUTENANT_GENERAL,
        GENERAL,
        GENERAL_OF_THE_ARMY
    }

    public enum NavyRanksOfficer {
        ENSIGN,
        LIEUTENANT_JUNIOR_GRADE,
        LIEUTENANT,
        LIEUTENANT_COMMANDER,
        COMMANDER,
        CAPTAIN,
        REAR_ADMIRAL_LOWER_HALF,
        REAR_ADMIRAL_UPPER_HALF,
        VICE_ADMIRAL,
        ADMIRAL,
        FLEET_ADMIRAL
    }

    public enum AirForceRanksOfficer {
        SECOND_LIEUTENANT,
        FIRST_LIEUTENANT,
        CAPTAIN,
        MAJOR,
        LIEUTENANT_COLONEL,
        COLONEL,
        BRIGADIER_GENERAL,
        MAJOR_GENERAL,
        LIEUTENANT_GENERAL,
        GENERAL,
        GENERAL_OF_THE_AIR_FORCE
    }

    public enum MarineRanksOfficer {
        SECOND_LIEUTENANT,
        FIRST_LIEUTENANT,
        CAPTAIN,
        MAJOR,
        LIEUTENANT_COLONEL,
        COLONEL,
        BRIGADIER_GENERAL,
        MAJOR_GENERAL,
        LIEUTENANT_GENERAL,
        GENERAL
    }

    public enum CoastGuardRanksOfficer {
        ENSIGN,
        LIEUTENANT_JUNIOR_GRADE,
        LIEUTENANT,
        LIEUTENANT_COMMANDER,
        COMMANDER,
        CAPTAIN,
        REAR_ADMIRAL_LOWER_HALF,
        REAR_ADMIRAL,
        VICE_ADMIRAL,
        ADMIRAL
    }
}
