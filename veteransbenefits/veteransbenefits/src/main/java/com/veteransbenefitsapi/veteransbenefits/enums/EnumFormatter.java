package com.veteransbenefitsapi.veteransbenefits.enums;

public class EnumFormatter {
    public static String formatEnum(Enum<?> enumValue) {
        String name = enumValue.name();
        String[] parts = name.split("_");

        StringBuilder formattedName = new StringBuilder();

        for (String part : parts) {
            formattedName.append(Character.toUpperCase(part.charAt(0)));
            formattedName.append(part.substring(1).toLowerCase());
            formattedName.append(" ");
        }

        if (formattedName.length() > 0) {
            formattedName.deleteCharAt(formattedName.length() - 1);
        }

        return formattedName.toString();
    }

    public static String[] formatEnums(Enum<?>[] enumValues) {
        String[] formattedEnums = new String[enumValues.length];

        for (int i = 0; i < enumValues.length; i++) {
            formattedEnums[i] = formatEnum(enumValues[i]);
        }

        return formattedEnums;
    }
}